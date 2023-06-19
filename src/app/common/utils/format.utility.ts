import moment from 'jalali-moment';

class FormatUtil {


  static convertGragorianToPersainDate(date: any) {
    if (date && date.length > 9) {
      try {
        return moment(date, 'YYYY-MM-DDTHH:mm:ss')
          .locale('fa')
          .format('YYYY/MM/DD  |  HH:mm')
          .toString();
      } catch (err) {
        return '-';
      }
    }
    return '-';
  };


  static fixNumbers(str: any) {

    const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g]
    const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]

    if (typeof str === 'string') {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };

}

export default FormatUtil;
