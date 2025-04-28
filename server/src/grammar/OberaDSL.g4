grammar OberaDSL;

// Parser rules
program
    : component*
    ;

component
    : IDENTIFIER LCURLY (property | component)* RCURLY
    ;

property
    : IDENTIFIER COLON value SEMICOLON
    ;

value
    : STRING                  // String values
    | NUMBER                  // Numeric values
    | BOOLEAN                 // Boolean values
    | array                   // Array values
    | IDENTIFIER              // Variable references
    ;

array
    : LBRACKET (value (COMMA value)*)? RBRACKET
    ;

// Lexer rules
IDENTIFIER  : [a-zA-Z_][a-zA-Z0-9_-]* ;
STRING      : '"' (~["\r\n] | '\\"')* '"' ;
NUMBER      : [0-9]+ ('.' [0-9]+)? ;
BOOLEAN     : 'true' | 'false' ;

LCURLY      : '{' ;
RCURLY      : '}' ;
LBRACKET    : '[' ;
RBRACKET    : ']' ;
COLON       : ':' ;
SEMICOLON   : ';' ;
COMMA       : ',' ;

// Whitespace and comments
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;
LINE_COMMENT  : '//' ~[\r\n]* -> skip ;
WS            : [ \t\r\n]+ -> skip ;