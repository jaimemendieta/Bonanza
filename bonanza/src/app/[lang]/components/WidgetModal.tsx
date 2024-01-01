import React from 'react';

class WidgetModal extends React.Component<{ url: string, onClose: () => void }> {
    render() {
        let { url, onClose } = this.props;
        return (
            <>
                <div className="spwidget--overlay"></div>
                <div className="spwidget--scroller">
                    <div className="loader"></div>
                    <iframe src={url}></iframe>
                    <button className="spwidget--close" onClick={onClose}></button>
                </div>
            </>
        );
    }
}

export default WidgetModal;
