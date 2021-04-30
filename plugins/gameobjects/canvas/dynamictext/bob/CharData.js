import Base from './Base.js';
import TextStyle from './TextStyle.js';

class CharData extends Base {
    constructor(
        parent,
        style,
        text,
        x, y, rotation
    ) {
        super(parent, 'text');

        this.style = new TextStyle(style);
        this.setText(text);

        this.setPosition(x, y);
        this.setRotation(rotation);
    }

    get autoRound() {
        return this.parent.autoRound;
    }

    modifyStyle(style) {
        this.setDirty(true);
        this.style.modify(style);
        return this;
    }

    setText(text) {
        this.setDirty(this.text != text);
        this.text = text;
        this.width = (text !== '\n') ? this.style.getTextWidth(this.context, text) : 0;
        return this;
    }

    draw() {
        if (!this.visible || (this.text === '') || (this.text === '\n')) {
            return this;
        }

        var context = this.context;
        context.save();

        var textStyle = this.style;
        textStyle.syncFont(context).syncStyle(context);

        var x = this.x + this.style.x,
            y = this.y + this.style.y;
        if (this.autoRound) {
            x = Math.round(x);
            y = Math.round(y);
        }

        context.translate(x, y);
        context.rotate(this.rotation);

        if (textStyle.stroke && textStyle.strokeThickness) {
            context.strokeText(this.text, 0, 0);
        }

        if (textStyle.color) {
            context.fillText(this.text, 0, 0);
        }

        context.restore();
    }
}

export default CharData;