SCRIPT=webmacro/webmacro.py
FLAGS=
HTML=index.html factorial.html base64.html hexxor.html sbxor.html prime.html
JS=js/base64.js js/count.js js/display.js js/factorial.js js/hexxor.js js/prime.js js/sbxor.js
HTML_OUTPUT_DIR=docs
JS_OUTPUT_DIR=docs/js

make:
	./$(SCRIPT) $(HTML) $(HTML_OUTPUT_DIR)
	./$(SCRIPT) $(JS) $(JS_OUTPUT_DIR)
clean:
	rm $(HTML_OUTPUT_DIR)/*.html
	rm $(JS_OUTPUT_DIR)/*.js
