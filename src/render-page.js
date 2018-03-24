const { html: beautify_html } = require('js-beautify');

const css_options = {
  indent_size: 2,                   // Indentation size [4]
  indent_char: ' ',                 // Indentation character [" "]
  indent_with_tabs: false,          // Indent with tabs, overrides -s and -c
  eol: '\\n',                       // Character(s) to use as line terminators. (default newline - "\\n")
  end_with_newline: false,          // End output with newline
  selector_separator_newline: true, // Add a newline between multiple selectors
  newline_between_rules: true,      // Add a newline between CSS rules
};

const html_options = {
  indent_size: 2,                                  // Indentation size [4]
  indent_char: ' ',                                // Indentation character [" "]
  indent_with_tabs: false,                         // Indent with tabs, overrides -s and -c
  eol: '\\n',                                      // Character(s) to use as line terminators. (default newline - "\\n")
  end_with_newline: true,                          // End output with newline
  preserve_newlines: false,                        // Preserve existing line-breaks (--no-preserve-newlines disables)
  max_preserve_newlines: 10,                       // Maximum number of line-breaks to be preserved in one chunk [10]
  indent_inner_html: false,                        // Indent <head> and <body> sections. Default is false.
  brace_style: 'collapse',                         // [collapse-preserve-inline|collapse|expand|end-expand|none] ["collapse"]
  indent_scripts: 'normal',                        // [keep|separate|normal] ["normal"]
  wrap_line_length: 0,                             // Maximum characters per line (0 disables) [250]
  wrap_attributes: 'auto',                         // Wrap attributes to new lines [auto|force|force-aligned|force-expand-multiline] ["auto"]
  wrap_attributes_indent_size: void 0,             // Indent wrapped attributes to after N characters [indent-size] (ignored if wrap-attributes is "force-aligned")
  unformatted: ['inline'],                         // List of tags (defaults to inline) that should not be reformatted
  content_unformatted: ['pre', 'script', 'style'], // List of tags (defaults to pre) whose content should not be reformatted
  extra_liners: [],                                // List of tags (defaults to [head,body,/html] that should have an extra newline before them.
};

module.exports = (locals, callback) => (
  require('../.cache/static-entry')(locals, (err, result) => {
    callback(err, beautify_html(result, {
      ...html_options,
      css: {
        ...css_options
      }
    }));
  })
);