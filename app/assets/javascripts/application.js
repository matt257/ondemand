// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap
//= require js-routes
//= require_tree .

active_var = function() {
    return $('tr.active').attr('id');
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $("#copy_button").bind('click', false);
    $("#stop_button").bind('click', false);
    $("#template_button").bind('click', false);
    $("#destroy_button").bind('click', false);

    var table = $('#jobListTable').DataTable();

    $('#jobListTable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        }
        else {
            table.$('tr.active').removeClass('active');
            $(this).addClass('active');

        }
        update_display(active_var());
    });
});

