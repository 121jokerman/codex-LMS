import SendSMS from 'react-native-sms';

export function sendViaSms(message: string, phone: string): Promise<void> {
  return new Promise((resolve, reject) => {
    SendSMS.send(
      {
        body: message,
        recipients: [phone],
        successTypes: ['sent', 'queued']
      },
      (completed, cancelled) => {
        if (completed && !cancelled) resolve();
        else reject(new Error('SMS failed or cancelled'));
      }
    );
  });
}
