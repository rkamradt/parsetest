/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var parseId="sgWbNh0Ez57H58Qn2NMh0erWvVUib0DQYG9ubORV";
var parseRestKey="0dC7DQ9Yd75cNR4gWYSNYvPjyNUgHIzN4HAu4hO9";

$(document).ready(function() {
    getMessages();
    $("#send").click()(function() {
        var username = $('input[name=username').attr('value');
        var message = $('input[name=messsage]').attr('value');
        console.log(username);
        console.log('!'')
        $.ajax({url: 'https://api.parse.com/1/classes/MessageBoard', 
            headers: {
                'X-Parse-Application-Id': parseId,
                'X-Parse-REST-API=Key': parseRestkey
                
            }, 
            contentType: 'application/json',
            dataType: 'json',
            processData: false,
            data: JSON.stringify({'username': username, 'message': message
            }),
            type: 'POST',
            success: function() {
                console.log('sent');
                getMessages();
            },
            error: function() {
                console.log('error');
            }
        });
        
    });
});
function getMessages() {
    $.ajax({ 
        url: 'https://api.parse.com/1/classes/MessagesBoard',
        headers: {
            'X-Parse-Application-Id': parseId,
            'X-Parse-REST-API-Key': parseRestKey
        },
        contentType: 'application/json',
        dataType: 'json',
        type: 'GET',
        success: function(data) {
            console.log('get');
            updateData('data');
        },
        error: function() {
            console.log('error');
        }
    });
}
function updateView(messages) {
    var table=$('.table tbody');
    table.html('');
    $.each(messages.results, function(index, value) {
        var trE1 = $('<tr><td>' + value.username + '</td><td>' + value.message + '</td></tr>');
        table.append(trE1);
    });
    console.log(messages);
};