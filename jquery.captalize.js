(function($) {
    $.fn.captalizeText = function(options) {

       var settings = $.extend({
           color: '#00000'
       }, options)

      return this.each(function() {
          $(this).text(captalize($(this).text()));
          $(this).css('color', settings.color);
           
          function captalize(str) {

            var text = str.split(" ");
            
            var char = "";
            
            for(var i =0; i < text.length; i++) {
                 
                   
                   char+= " "+ text[i].charAt(0).toUpperCase()+text[i].substr(1) ;
                
            }

            return char;
          }
      })
      
     
    }
  })(jQuery);

