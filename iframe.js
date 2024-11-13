//javascript
mw.util.addCSS(
    'iframe.sbframe {\n' +
       '\twidth: 180px;\n' +
       '\theight: 190px;\n' +
       '\toverflow: hidden;\n' +
       '\tborder: none;\n' +
    '}'
)

$("span.sbframe").each(function() {}

    var widget,
    
    dataWidget = $(this).attr("data-widget");
    
    try {
    
    widget = dataWidget.match(/[a-z0-9]+/i)[0];
    
    $(this).replaceWith('<iframe class="sbframe" src="widget.socialblade.com/widget.php?v=2&u=' + widget + '" scrolling="no" frameBorder="0" />');
    
    } catch(err) {
    
    console.log("Invalid '.sbframe' widget id: " + dataWidget);
    
    }