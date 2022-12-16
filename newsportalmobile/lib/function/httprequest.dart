import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

httpGet(url) async {
  url = Uri.parse(url);
  var data = await http.get(url);
  var decodedBody = json.decode(data.body);
  return decodedBody;
}
