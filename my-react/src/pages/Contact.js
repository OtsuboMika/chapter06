import React, { useState } from 'react';
import classes from "../css/Contact.module.css";

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let errors = {};
    
    if (!name) {
      errors.name = "お名前は必須です。";
    } else if (name.length > 30) {
      errors.name = "お名前は30文字以内で入力してください。";
    }

    if (!email) {
      errors.email = "メールアドレスは必須です。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "正しいメールアドレスの形式で入力してください。";
    }

    if (!message) {
      errors.message = "本文は必須です。";
    } else if (message.length > 500) {
      errors.message = "本文は500文字以内で入力してください。";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // フォームのデフォルトの送信動作を防ぐ（ページリロードなど）
    const validationErrors = validate(); // 入力値をチェックし、バリデーションエラーを取得
    setErrors(validationErrors); // エラーがある場合は、errors ステートに格納
    setSubmitError('');
    
    if (Object.keys(validationErrors).length === 0) { // エラーがない場合のみ処理を続行
      setIsSubmitting(true);
      try {
        const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
          {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ name, email, message }),
          });
          if (!response.ok) {throw new Error("送信に失敗しました。エラーが発生しました。");}
            alert("お問い合わせが送信されました。");
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
      } catch (error) {
      setSubmitError(error.message);
      } finally {
      setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={classes.Contact_container}>
      <h2 className={classes.Contact_title}>問い合わせフォーム</h2>
      {submitError && <p className={classes.Contact_formError}>{submitError}</p>}
 	    <form onSubmit={handleSubmit}>
        
        {/* お名前 */}
        <div className={classes.Contact_formGroup}>
          <label className={classes.Contact_formLabel}>お名前</label>
          <div className={classes.Contact_inputContainer}>
            <input 
              className={classes.Contact_formInput}
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
            />
            {errors.name && <p className={classes.Contact_formError}>{errors.name}</p>}
          </div>
        </div>
        
        {/* メールアドレス */}
        <div className={classes.Contact_formGroup}>
          <label className={classes.Contact_formLabel}>メールアドレス</label>
          <div className={classes.Contact_inputContainer}>
            <input 
              className={classes.Contact_formInput}
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            {errors.email && <p className={classes.Contact_formError}>{errors.email}</p>}
          </div>
        </div>
        
        {/* 本文 */}
        <div className={classes.Contact_formGroup}>
          <label className={classes.Contact_formLabel}>本文</label>
          <div className={classes.Contact_inputContainer}>
            <textarea 
              className={classes.Contact_formInput}
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              rows="15"
              disabled={isSubmitting}
            />
            {errors.message && <p className={classes.Contact_formError}>{errors.message}</p>}
          </div>
        </div>
        
        <div className={classes.Contact_formGroup}>
          <button className={classes.Contact_formSubmit} type="submit" disabled={isSubmitting}>送信</button>
          <button className={classes.Contact_formReset} type="reset" onClick={() => { setName(''); setEmail(''); setMessage(''); setErrors({}); setSubmitError(''); }} disabled={isSubmitting}>クリア</button>
        </div>

      </form>
    </div>
  );
};
