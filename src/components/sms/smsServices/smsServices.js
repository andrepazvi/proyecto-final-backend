const SmsManager = require('../../../utils/smsManager/smsManager');
class SendSmsServices {
  async sendSms(payload, res) {
    try {
      const data = await SmsManager.sendSms(payload);
      return res.sendSuccess({
        payload: {
          message: 'Sms enviado correctamente',
          data,
        },
      });
    } catch (error) {
      return res.sendServerError('Error al enviar el Sms');
    }
  }
}

module.exports = new SendSmsServices();
