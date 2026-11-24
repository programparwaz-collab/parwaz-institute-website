# Tiny local preview server. Run: powershell -ExecutionPolicy Bypass -File tools\serve.ps1
# Only needed for previewing; the site itself is plain static files.
param([int]$Port = 5173)
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$types = @{ '.html' = 'text/html; charset=utf-8'; '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
  '.svg' = 'image/svg+xml'; '.png' = 'image/png'; '.jpg' = 'image/jpeg'; '.webp' = 'image/webp'; '.ico' = 'image/x-icon' }
$server = New-Object System.Net.HttpListener
$server.Prefixes.Add("http://localhost:$Port/")
$server.Start()
Write-Host "PARWAZ Institute preview: http://localhost:$Port/"
while ($server.IsListening) {
  $ctx = $server.GetContext()
  try {
    $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    if ($rel -eq '') { $rel = 'index.html' }
    $file = [IO.Path]::GetFullPath((Join-Path $root $rel))
    if ($file.StartsWith($root + '\') -and (Test-Path -LiteralPath $file -PathType Leaf)) {
      $bytes = [IO.File]::ReadAllBytes($file)
      $type = $types[[IO.Path]::GetExtension($file).ToLower()]
      if (-not $type) { $type = 'application/octet-stream' }
      $ctx.Response.ContentType = $type
      $ctx.Response.Headers.Add('Cache-Control', 'no-store')
    } else {
      $ctx.Response.StatusCode = 404
      $bytes = [Text.Encoding]::UTF8.GetBytes('Not found')
    }
    $ctx.Response.ContentLength64 = $bytes.Length
    if ($ctx.Request.HttpMethod -ne 'HEAD') { $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length) }
  } catch { Write-Host $_ } finally { try { $ctx.Response.Close() } catch {} }
}
