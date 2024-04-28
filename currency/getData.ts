const xml2js = require('react-native-xml2js');
const iconv = require('iconv-lite');
const Buffer = require('buffer').Buffer;

export default async function getData(): Promise<Currency[]> {
    const response = await fetch('http://www.cbr.ru/scripts/XML_daily.asp');
    const buffer = await response.arrayBuffer();
    const utf8Data = iconv.decode(new Buffer(buffer), 'win1251');
    var parser = new xml2js.Parser();
    return new Promise((resolve, reject) => {
      parser.parseString(utf8Data, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.ValCurs.Valute);
        }
      });
    });
};