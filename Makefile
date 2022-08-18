SCRIPT=webmacro/webmacro.py
FLAGS=
HTML=index.html factorial.html base64.html hexxor.html cipher1.html prime.html
OUTPUT_DIR=docs

make:
	./$(SCRIPT) $(HTML) $(OUTPUT_DIR)
clean:
	rm $(OUTPUT_DIR)/*.html
