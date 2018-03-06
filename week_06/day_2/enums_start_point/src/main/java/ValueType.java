public enum ValueType {
    ACE(1),
    TWO(2),
    THREE(3),
    FOUR(4),
    FIVE(5),
    SIX(6),
    SEVEN(7),
    EIGHT(8),
    NINE(9),
    TEN(10),
    JACK(10),     //key(value) pairs, i.e. this.value for this ENUM key
    QUEEN(10),
    KING(10);     //note semi-colon

    private final int value;     //use an integer called value which is private and (final)cannot be changed

    ValueType(int value){        //constructor is always below the values
        this.value = value;
    }

    public int getValue(){       //getter to expose value to other classes etc.
        return this.value;
    }
}
