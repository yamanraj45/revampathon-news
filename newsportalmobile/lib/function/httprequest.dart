import 'package:http/http.dart' as http;

httpGet(url) {
  var data = http.get(url);
  print('data');
}
