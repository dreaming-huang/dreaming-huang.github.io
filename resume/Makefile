SRC_CN = resume.tex
SRC_EN = resume_en.tex

.PHONY: all cn en clean

all: cn en

cn:
	xelatex $(SRC_CN)

en:
	xelatex $(SRC_EN)

clean:
	rm -f *.aux *.log *.out *.toc *.synctex.gz *.fdb_latexmk *.fls *.pdf
