function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.id = values[0];
    obj.first_name = values[1];
    obj.last_name = values[2];
    obj.email = values[3];
    obj.age = values[4];
    obj.city = values[5];
    var jsonString = JSON.stringify(obj);
    return jsonString;
   }


   