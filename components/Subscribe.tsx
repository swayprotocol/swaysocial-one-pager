import React from 'react';

function Subscribe() {
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const subscribeUser = async event => {
    event.preventDefault();
    setError(false);

    const formData = new FormData();
    formData.append('email', event.target.email.value);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwRBkztK31FOMI4ylfjU4ebC9EV_k0g0toUGVwi88nrryxlFAL8L3FwLXMo6sQUNKlwOQ/exec',
        {
          body: formData,
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          mode: 'no-cors'
        }
      );
      setSuccess(true);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <section className="start-staking-section form-section page-section element-left element-right">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h2 className="text-center">Be The First To Know</h2>
            {!success ? (
              <form className="form justify-content-center" onSubmit={subscribeUser}>
                <input id="email" className="form-input" type="email" autoComplete="email" placeholder="E-mail" required/>
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            ) : (
              <p className="text-center">
                <span className="highlight">You are set!<br/>Thank you for joining our list.</span>
              </p>
            )}
            {error && (
              <p className="text-center mt-3">There was an error, please try again.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
