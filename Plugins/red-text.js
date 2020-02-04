import * as React from 'react';

const RedText = (props) => {
    const text = props.message.text

    return (
        <span style={{ color: 'red' }}>
            {text}
        </span>
    )
}

const redTextPlugin = {
    match: 'text-message',
    component: RedText
}

if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = []
}

window.cognigyWebchatMessagePlugins.push(redTextPlugin);
