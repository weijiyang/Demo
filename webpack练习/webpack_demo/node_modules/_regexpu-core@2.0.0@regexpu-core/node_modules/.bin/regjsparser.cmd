@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\_regjsparser@0.1.5@regjsparser\bin\parser" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\_regjsparser@0.1.5@regjsparser\bin\parser" %*
)