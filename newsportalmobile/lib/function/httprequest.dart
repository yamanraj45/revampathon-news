import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

httpGet(url) {
  var data = http.get(url);
  if (kDebugMode) {
    print(data);
  }
}
