add_action ('wp_ajax_ajax_get_streets' , 'ajax_get_streets' );
add_action ('wp_ajax_nopriv_ajax_get_streets' , 'ajax_get_streets' );

function ajax_get_streets(){
    wp_send_json( get_streets_data_by_city_name( $_REQUEST['city_name'] ) );
}



function get_streets_data_by_city_name( $city_name ){
    global $wpdb;
    $results = $wpdb->get_results( "SELECT street_id as id, street_name as text  FROM gov_rechovot WHERE city_name = '" . $city_name . "'", OBJECT );
    return $results;
}

function get_cities_data(){
    global $wpdb;
    $results = $wpdb->get_results( "SELECT city_name as id, city_name as text  FROM gov_cities", OBJECT );
    return $results;
}
