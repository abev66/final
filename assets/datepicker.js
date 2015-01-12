    $('#datepicker').datepicker({
    format: "yyyy-mm-dd",
    weekStart: 0,
    todayBtn: "linked",
    language: "zh-TW",
    autoclose: true,
    todayHighlight: true
    });
    
    $('#datepicker').datepicker({
        autoclose: true
    });

    $('#datepicker').on('show', function(e){
        if ( e.date ) {
            $(this).data('stickyDate', e.date);
        }
        else {
            $(this).data('stickyDate', null);
        }
    });

    $('#datepicker').on('hide', function(e){
        var stickyDate = $(this).data('stickyDate');

        if ( !e.date && stickyDate ) {
            $(this).datepicker('setDate', stickyDate);
            $(this).data('stickyDate', null);
        }
    });