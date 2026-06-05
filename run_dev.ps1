$nodePath = Join-Path (Get-Location) ".node"
$env:PATH = "$nodePath;$env:PATH"
Write-Host "Starting Next.js dev server..."
& .node\npm.cmd run dev
