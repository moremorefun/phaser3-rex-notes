## Introduction

Typing characters on [dynamic text](textplayer.md), waiting click or key enter, play sound effect or backgroun music.

- Author: Rex
- Game object

## Live demos

- [Play](https://codepen.io/rexrainbow/pen/oNZbbJv)

## Usage

[Sample code](https://github.com/rexrainbow/phaser3-rex-notes/tree/master/examples/textplaayer)

### Install plugin

#### Load minify file

- Load plugin (minify file) in preload stage
    ```javascript
    scene.load.plugin('rextextplayerplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextextplayerplugin.min.js', true);
    ```
- Add text-player object
    ```javascript
    var txt = scene.add.rexTextPlayer(config);
    ```

#### Import plugin

- Install rex plugins from npm
    ```
    npm i phaser3-rex-plugins
    ```
- Install plugin in [configuration of game](game.md#configuration)
    ```javascript
    import TextPlayerPlugin from 'phaser3-rex-plugins/plugins/textplayer-plugin.js';
    var config = {
        // ...
        plugins: {
            global: [{
                key: 'rexTextPlayerPlugin',
                plugin: TextPlayerPlugin,
                start: true
            },
            // ...
            ]
        }
        // ...
    };
    var game = new Phaser.Game(config);
    ```
- Add text-player object
    ```javascript
    var txt = scene.add.rexTextPlayer(config);
    ```

#### Import class

- Install rex plugins from npm
    ```
    npm i phaser3-rex-plugins
    ```
- Import class
    ```javascript
    import TextPlayer from 'phaser3-rex-plugins/plugins/textplayer.js';
    ```
- Add text-player object
    ```javascript
    var txt = new TextPlayer(scene, config);
    sscene.add.existing(txt);
    ```

### Create instance

```javascript
var txt = scene.add.rexTextPlayer({
    x: 0, 
    y: 0,
    width: undefined, 
    height: undefined,

    padding: 0,  // {left: 0, right: 0, top: 0, bottom: 0}

    background: {
        color: null,
        color2: null,
        horizontalGradient: true,

        stroke: null,
        strokeThickness: 2,

        cornerRadius: 0,
        cornerIteration: null
    },

    innerBounds: {
        color: null,
        color2: null,
        horizontalGradient: true,

        stroke: null,
        strokeThickness: 2
    },

    style: {
        bold: false,
        italic: false,
        fontSize: '16px',
        fontFamily: 'Courier',
        color: '#fff',
        stroke: '#fff',
        strokeThickness: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 0,
        offsetX: 0,
        offsetY: 0
    },

    parser: {

    }

    wrap: {
        callback: undefined, // Default wrapping callback is dynamicText.runWordWrap()
        lineHeight:
        // maxLines: 
        padding: {bottom: 0, top: 0},
        letterSpacing: 0,
        hAlign: 0, // 0|'left'|1|'center'|2|'right'
        vAlign: 0, // 0|'top'|1|'center'|2|'bottom'
        charWrap: false
    },

    typing: {
        speed: 250,
        onTypingStart: function (children) {
            for (var i = 0, cnt = children.length; i < cnt; i++) {
                children[i].setVisible(false);
            }
        },  // Default: set all children invisible
        animation: undefined,  // Default: no typing animation, only invoke onStart callback
        animation: {
            duration: 1000,
            yoyo: false,
            onStart: function(child) {
                child.setVisible();
            },
            onProgress: function(child, t) {

            },
            onComplete: function(child) {

            }
        }
    },

    images: {
        // key: {width, height}
    },

    sounds: {
        bgm: {
            loop: true,
            fade: 0
        }
    }

    clickTarget: this,  // This text player
    
    nextPageInput: 'click',

    text: undefined
});
```

- `x`, `y` : Position of this text-player game object.
- `width` : Fixed width.
    - A number : Width of this text-player game object. 
        - Wrap-width is `width - padding.left - padding.right`.
    - `undefined` : Width of this text-player game object will be set after invoked `runWordWrap` method.
- `height` : Fixed height.
    - A number : Height of this text-player game object. 
    - `undefined` : Height of this text-player game object will be set after invoked `runWordWrap` method.
- `padding` : Padding of bounds.
    - A number 
    - `padding.left`, `padding.right`, `padding.top`, `padding.bottom`
- `background` : Properties of background round-rectangle.
    - `background.color` : Fill color.
        - `null` : No filling.
    - `background.color2` : Gradient fill color.
        - `null` : No gradient filling.
    - `background.horizontalGradient` : Horizontal or vertical gradient filling.
        - `true` : Horizontal gradient filling.
        - `false` : Vertical gradient filling.
    - `background.stroke` : Stroke color.
        - `null` : No stroke.
    - `background.strokeThickness` : Line width of stroke.
    - `background.cornerRadius` : Corner-radius of round rectangle.
    - `background.cornerIteration` : Iteration of corner-radius.
        - `null` : Draw corner-radius via arc directly.
        - A number : Draw corner-radius via lines
- `innerBounds` : Properties of inner-bounds.
    - `innerBounds.color` : Fill color.
        - `null` : No filling.
    - `innerBounds.color2` : Gradient fill color.
        - `null` : No gradient filling.
    - `innerBounds.horizontalGradient` : Horizontal or vertical gradient filling.
        - `true` : Horizontal gradient filling.
        - `false` : Vertical gradient filling.
    - `innerBounds.stroke` : Stroke color.
        - `null` : No stroke.
    - `innerBounds.strokeThickness` : Line width of stroke.
- `style` : Initial text-style.
    - `style.bold` : Bold
    - `style.italic` : Italic
    - `style.fontSize` : Font size
    - `style.fontFamily` : Font family
    - `style.color` : Fill color
    - `style.stroke` : Stroke color
    - `style.strokeThickness` : Line width of stroke.
    - `style.shadowColor` : Shadow color.
        - `null` : No shadow.
    - `style.shadowOffsetX` : OffsetX of shadow.
    - `style.shadowOffsetY` : OffsetY of shadow.
    - `style.shadowBlur` : Blur of shadow.
    - `style.offsetX` : OffsetX.
    - `style.offsetY` : OffsetY.
- `wrap` : Default configuration [Horizontal](dynamictext.md#horizontal-wrap)/[Vertical](dynamictext.md#vertical-wrap) wrapping.
- `sounds` : Configuration of sound effect, or background music
    - `sounds.bgm.loop` :
        - `true` : Loop background music, default behavior.
        - `false` : Play background music once.
    - `sounds.bgm.fade` :
        - `0` : No fade-in or fade-out when starting or stopping a background music.
        - A number : Fade-in or fade-out (cross-fade) when starting or stopping a background music.
- `nextPageInput` : Wait condition to type next page
    - `'click'` : Wait click, default behavior.
    - `'click|2000'` : Wait one of condition: click, or 2000ms.
    - `'click|enter|2000'` : Wait one of condition: click, enter key down, or 2000ms.
    - A function callback : 
        ```javascript
        function(callback) {
            // Invoke `callback()` to continue typing
        }
        ```
    - `null` : Typing next page without waiting condition.
- `clickTarget` : Click target, default is text player itself.
    - `scene` : Any pointer down on this scene.
- `text` : Content of text to play.

or

```javascript
var txt = scene.add.rexTextPlayer(x, y, width, height, config);
```

or

```javascript
var txt = scene.add.rexTextPlayer(x, y, config);
```

Add textplayer from JSON

```javascript
var txt = scene.make.rexTextPlayer({
    x: 0,
    y: 0,

    // origin: {x: 0.5, y: 0.5},
    // fill: null,
    
    add: true
});
```

### Custom class

- Define class
    ```javascript
    class MyTextPlayer extends TextPlayer {
        constructor(scene, x, y, config) {
            super(scene, x, y, config);
            // ...
            scene.add.existing(this);
        }
        // ...

        // preUpdate(time, delta) {}
    }
    ```
    - `scene.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
        - If the Game Object renders, it will be added to the Display List.
        - If it has a `preUpdate` method, it will be added to the Update List.
- Create instance
    ```javascript
    var txt = new MyTextPlayer(scene, x, y, config);
    ```

### Typing content

```javascript
txt.play(content);
```

or

```javascript
txt.playPromise(content)
    .then(function(){
        // Typing content complete
    })
```

#### Events

- On typing content complete
    ```javascript
    txt.on('complete', function() {

    })
    ```
- On typing a character or an image
    ```javascript
    txt.on('typing', function(child) {
        if (child.type === 'text') {
            var character = child.text;
        } else {
            var textureLey = child.key;
            var frameKey = child.frame;
        }
    })
    ```
- On typing a page start
    ```javascript
    txt.on('page.start', function() {

    })
    ```
- On typing a page complete
    ```javascript
    txt.on('page.complete', function() {

    })
    ```

### Tags of content

#### Text style

- Font color : `[color=red]content[/color]`, `[color=#FF0000]content[/color]`
- Font size : `[size=24]content[/size]`
- Bold : `[b]content[/b]`
- Italic : `[i]content[/i]`
- Stroke : `[stroke]content[/stroke]`, `[stroke=red]content[/stroke]`
    - `strokeThickness` is set in config
- Shadow : `[shadow]content[/shadow]`, `[shadow=red]content[/shadow]`
    - `shadowOffsetX`, `shadowOffsetY`, `shadowBlur` are set in config
- Character offset Y : `[y=-8]content[/y]`

#### Image

- Image : `[img=key]`

##### Render size

- Set render size In config
    ```javascript
    {
        images: {
            // key: {width, height},
            // key: {textureKey, frameKey, width, height}
        }
    }
    ```
- Set render size by method
    ```javascript
    txt.addImage({
        // key: {width, height},
        // key: {textureKey, frameKey, width, height}
    })
    ```
- Use origin render size by default

#### Sound effect

- Play : `[se=key]`
- Play with fade in volume : `[se=key,1000]`
- Fade in volume : `[se.fadein=1000]`
- Fade out volume : `[se.fadeout=1000]`
- Fade out volume then stop : `[se.fadeout=1000,stop]`
- Set volume : `[se.volume=1]`

#### Background music

- Play, stop : `[bgm=key]`, `[/bgm]`
- Play with fade in volume : `[bgm=key,1000]`
- Pause, resume : `[bgm.pause]`, `[/bgm.pause]`
- Fade in volume : `[bgm.fadein=1000]`
- Fade out volume : `[bgm.fadeout=1000]`
- Fade out volume then stop : `[bgm.fadeout=1000,stop]`
- Cross fade to another background music : `[bgm.cross=key,10000]`
    - Or set `sounds.bgm.fade` in config
- Set volume : `[bgm.volume=1]`

#### Wait conditions

- Wait click : `[wait=click]`, `[click]`
    - Also fire event `'wait.click'`
       ```javascript
        txt.on('wait.click', function() {
        })
       ```
- Wait key-down : `[wait=enter]`, `[wait=space]`, ....
    - Also fire event `'wait.keydown'`
       ```javascript
        txt.on('wait.keydown', function(keyName) {
        })
       ```
- Wait time : `[wait=1000]`
    - Also fire event `'wait.time'`
       ```javascript
        txt.on('wait.time', function(time) {
        })
       ```
- Wait sound effect : `[wait=se]`
    - Also fire event `'wait.music'`
       ```javascript
        txt.on('wait.music', function(music) {
            /// var key = music.key;
        })
       ```
- Wait background music : `[wait=bgm]`
    - Also fire event `'wait.music'`
       ```javascript
        txt.on('wait.music', function(music) {
            /// var key = music.key;
        })
       ```
- Wait callback : `[wait]`
    - Fire event `'wait'`
        ```javascript
        txt.on('wait', function(callback) {
            // Invoke `callback()` to continue typing
        })
        ```
- Combine conditions : `[wait=cond0|cond1|...]`
    - Wait click, or enter key down : `[wait=click|enter]`
    - Wait click, enter key down, or 100ms : `[wait=click|enter|1000]`

#### Custom tag

Assume that adding a custom tag : `[custom=10,20][/custom]`

- On parse a +custom tag, will add a custom command child 
    ```javascript
    txt.on('parser.+custom', function(parser, a, b) {
        // console.log('Parse +custom tag:', a, b)
    })
    ```
- On execute a +custom command child
    ```javascript
    txt.on('tag.+custom', function(a, b) {
        // console.log('Execute +custom tag:', a, b)
    })
    ```
- On parse a -custom tag, will add a custom command child 
    ```javascript
    txt.on('parser.-custom', function(parser) {
        // console.log('Parse -custom tag')
    })
    ```
- On execute a -custom command child
    ```javascript
    txt.on('tag.-custom', function() {
        // console.log('Execute -custom tag')
    })
    ```
