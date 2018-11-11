function init_city_and_street_auto_data(){
    address_data = select2_data.address;
    city_data    = select2_data.cities;

    jQuery('[name="billing_address_1"]').select2({ data: address_data });
    jQuery('[name="billing_city"]').select2({ data: city_data });

    jQuery('select[name="billing_city"]').on("change", function (e) {
        if( ! billing_city_in_progress ){
            billing_city_in_progress = true;
            jQuery.ajax({
                type     : "post",
                dataType : "json",
                url      : ajaxurl,
                data : {
                    action : "ajax_get_streets",
                    city_name: jQuery(this).val()
                },
                success: function(response) {
                    jQuery('[name="billing_address_1"]').select2('destroy');
                    jQuery('[name="billing_address_1"]').select2({ data: response });
                    billing_city_in_progress = false;
                }
            });
        }
    });
}
