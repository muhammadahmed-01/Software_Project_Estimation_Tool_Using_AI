import React, { useState } from 'react';

const SendXlsxByEmail = () => {
  const [to, setTo] = useState([]);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [xlsx, setXlsx] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('to', to.join(','));
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('xlsx', xlsx);

    const response = await fetch('/send_email/', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={to}
        onChange={(e) => setTo(e.target.value.split(','))}
        multiple
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setXlsx(e.target.files[0])}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendXlsxByEmail;
