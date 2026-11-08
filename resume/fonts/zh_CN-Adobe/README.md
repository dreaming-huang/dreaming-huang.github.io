# Adobe CJK fonts

These four OpenType files are the Adobe 简体中文四套字体 used by
`zh_CN-Adobefonts_external.sty` (`Path = fonts/zh_CN-Adobe/`):

| File | Role |
| --- | --- |
| `AdobeSongStd-Light.otf` | 宋体 (main) |
| `AdobeHeitiStd-Regular.otf` | 黑体 (sans / bold) |
| `AdobeKaitiStd-Regular.otf` | 楷体 (italic) |
| `AdobeFangsongStd-Regular.otf` | 仿宋 (mono) |

They are included so a clone compiles with the original template look. If this
directory is empty (or you prefer not to use Adobe fonts), switch both
`resume.tex` and `resume_en.tex` to:

```tex
% \usepackage{zh_CN-Adobefonts_external}
\usepackage{zh_CN-fandol}
```

and compile with TeX Live Fandol instead.
