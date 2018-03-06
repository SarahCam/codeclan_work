public class Card {

    private SuitType suit;
    private ValueType value;

    public Card(SuitType suit, ValueType value) {

        this.suit = suit;
        this.value = value;
    }

    public SuitType getSuit(){

        return this.suit;
    }

    public int getValueFromEnum(){
        int cardValue = ValueType.QUEEN.getValue();
        return this.value.getValue();
    }

}