import React from 'react';

const Button = ({onClick, children }) => (
<button onClick={onClick} type="button" class="btn btn-primary">{children}</button>
)

export default Button;