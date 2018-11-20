# Pico

[Not much is known](http://wiki.xxiivv.com/Pico) about the machine, but it seems to be reacting to our presence.

<img src='https://raw.githubusercontent.com/hundredrabbits/Pico/master/PREVIEW.jpg' width="600"/>

## Guide

Each letter of the alphabet is an operation, lowercase letters typically operate on bang(`*`), uppercase letters operate on each frame. Bangs(`*`) can be generated by various operations.

### Ports Specs

```
Haste < Function > Input(s)
           v
        Output
```

- **Haste port** values are collected before runtime.
- **Inputs** are collected at runtime.
- **Output** is usually where the magic happens.

## Functions

### alpha functions

- `A` **add**(a, b): Outputs the sum of inputs.
- `B` **banger**(val): Bangs if input is `1`, `N`, `S`, `W` or `E`.
- `C` **clock**(min, max): Outputs a constant value based on the runtime frame.
- `D` **unknown**: --
- `E` **east**: Moves eastward, or bangs.
- `F` **if**(a, b): Outputs `1` if inputs are equal, otherwise `0`.
- `G` **generator**(val): Outputs a value on bang.
- `H` **halt**: Stops southward fn from operating.
- `I` **increment**(min, max): Increments southward fn.
- `J` **jump**(val): Outputs the northward fn.
- `K` **kill**: Kills southward fn.
- `L` **loop**('len): Loops a number of eastward fns.
- `M` **modulo**(val, mod): Outputs the modulo of inputs.
- `N` **north**: Moves Northward, or bangs.
- `O` **offset**('x, 'y, val): Reads a distant fn with offset.
- `P` **push**: Moves away on bang.
- `Q` **count**('len): Counts the number of fns present eastwardly.
- `R` **random**(min, max): Outputs a random value.
- `S` **south**: Moves southward, or bangs.
- `T` **track**('len, 'key, val): Outputs character at eastward position with offset.
- `U` **unknown**: --
- `V` **beam**: Bangs the nearest southward fn on bang.
- `W` **west**: Moves westward, or bangs.
- `X` **teleport**('x, 'y, val): Outputs value at offset.
- `Y` **type**(a, b): Compares the type(num/alpha/special) of inputs, and return `1` or `0`.
- `Z` **unknown**: --

### special functions

- `.` **null**: empty
- `*` **bang**: Bangs!
- `:` **midi**(channel, octave, note): Sends Midi
- `;` **udp**('len): Sends a string via UDP to localhost.
- `#` **comment**: Block Comment

## Controls

### Cursor

- `arrowKey`, move.
- `ctrl/cmd+arrowKey`, leap move.
- `shift+arrowKey`, resize cursor.
- `escape`, reset cursor.
- `enter`, toggle insert/write modes.

### Grid

- `space`, toggle play/pause modes.
- `<`/`>`, change BPM(speed).
- `[`/`]`, resize horizontal grid.
- `{`/`}`, resize vertical grid.
- `ctrl/cmd + c`, copy block.
- `ctrl/cmd + x`, cut block.
- `ctrl/cmd + v`, paste block.

## Midi Output

The midi special function is `:000`, it can take 4 inputs(channel, octave, note, velocity). For example, `:25C`, is a **C note, on the 5th octave, through the 3rd MIDI channel**, `:04c`, is a **C# note, on the 4th octave, through the 1st MIDI channel**. Velocity is either from `0`(0) to `9`(127), or `A`(0) to `Z`(127). For example, `:34C8`, is a **C note, on the 4th octave, through the 4th MIDI channel with a velocity of 112/127**, `:34CT`, is a **C note, on the 4th octave, through the 4th MIDI channel with a velocity of 96/127**.

## UDP Output

The [UDP](https://nodejs.org/api/dgram.html#dgram_socket_send_msg_offset_length_port_address_callback) special function is `3;MSG`, it has one haste input that gets a string length and locks the eastward ports. It sends the message on bang to the port `49160`. You can use the `listener.js` to test UDP messages.

## Install & Run

```
cd desktop
npm install
npm start
```

## TODOs

- Implement OSC
- Implement U.
- Implement Z.

## Extras

- This application supports the [Ecosystem Theme](https://github.com/hundredrabbits/Themes).
- Support this project through [Patreon](https://patreon.com/100).
- See the [License](LICENSE.md) file for license rights and limitations (MIT).
- Pull Requests are welcome!
