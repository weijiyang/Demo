@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\_ansi-html@0.0.7@ansi-html\bin\ansi-html" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\_ansi-html@0.0.7@ansi-html\bin\ansi-html" %*
)