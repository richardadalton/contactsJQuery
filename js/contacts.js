function get_contacts(url, on_success) {
    $.ajax({
        url: url,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Token " + localStorage.authtoken
        },
        success: on_success
    });
}


function delete_contact(url, on_success) {
    $.ajax({
        url: url,
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Token " + localStorage.authtoken
        },
        success: on_success
    });
}


function create_contact(first_name, last_name, email, on_success) {
    var data ={
        "first_name": first_name,
        "last_name": last_name,
        "email": email
    };

    $.ajax({
        url: BASE_URL + "/contacts/",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Token " + localStorage.authtoken
        },
        success: on_success
    });
}

