const TEST_STRINGS = [
    "abcabcbb",
    "aaaaaa",
    "abcde",
    "abcda"
];

var SOLUTIONS = [];

TEST_STRINGS.forEach(sample_string => {
    var distinct = [];
    var output = sample_string;
    var longest_substr = 1;
    var substr_char = "";
    // sample_string.forEach(char => {
    //     if (distinct.includes(char) == false) {
    //         distinct.push(char);
    //     }
    // });
    for (let i = 0; i < sample_string.length; i++) {
        if (distinct.includes(sample_string[i]) == false) {
            distinct.push(sample_string[i]);
        }
    }
    
    if (distinct.length != sample_string.length) {
        distinct.forEach(char => {
            var current_substr = 1;
            if ([...sample_string].filter(x => x === char).length > 1) {
                for (let i = sample_string.indexOf(char) + 1; i < sample_string.length; i++) {
                    if (sample_string[i] != char) {
                        current_substr++;
                    }
                    if (sample_string[i] == char || i == sample_string.length - 1) {
                        if (current_substr > longest_substr) {
                            longest_substr = current_substr;
                            substr_char = char;
                        }
                        break;
                    }
                }
            }
        });
        output = sample_string.substring(sample_string.indexOf(substr_char), sample_string.indexOf(substr_char) + longest_substr);
    }
    SOLUTIONS.push(output);
});

console.log(TEST_STRINGS);
console.log(SOLUTIONS);

var elem = document.getElementById("output");

var new_html = "";

for (let i = 0; i < TEST_STRINGS.length; i++) {
    new_html += `
    <div class="solution-box">
        <h3>Solution ${i + 1}</h3>
        <div>
            <div class="io-box">
                <div class="io-text">Input:</div>
                <div class="mono">${TEST_STRINGS[i]}</div>
            </div>
            <div class="io-box">
                <div class="io-text">Output:</div>
                <div class="mono">${SOLUTIONS[i]}</div>
            </div>
        </div>
    </div>
    `;
}

elem.innerHTML = new_html;