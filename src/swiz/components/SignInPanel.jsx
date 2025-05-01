
import React from "react";

const SignInPanel = ({ onClose }) => {
  return (
    <div className="signinPanel">
      <div className="signinContent">
        <button className="closeBtn" onClick={onClose}>
          ✖
        </button>
        <h2>Sign In</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPanel;
