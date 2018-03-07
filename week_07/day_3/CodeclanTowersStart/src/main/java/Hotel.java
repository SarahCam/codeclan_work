import java.util.ArrayList;

public class Hotel {

    private ArrayList<Room> rooms;

    public Hotel(ArrayList<Room> rooms) {
        this.rooms = rooms;
    }

    public void checkIntoBedRoom(ArrayList<Guest> guestList, int roomNumber){
        for (Room room : this.rooms){
            if (room instanceof BedRoom){                   // Check whether this room is actually an instance of BedRoom
                BedRoom bedroom = (BedRoom) room;           // CASTING room TO BedRoom SUBTYPE, so we can use SUBTYPE methods!!  HANDY
                if (bedroom.getRoomNumber() == roomNumber){
                    bedroom.checkIn(guestList);
                }
            }
        }
    }

    public BedRoom getBedRoom(int roomNumber){
        BedRoom bedroom = null;
        for (Room room : this.rooms){
            if (room instanceof BedRoom){                   // Check whether this room is actually an instance of BedRoom
                bedroom = (BedRoom) room;           // CASTING room TO BedRoom SUBTYPE, so we can use SUBTYPE methods!!  HANDY
                if (bedroom.getRoomNumber() == roomNumber){
                    return bedroom;
                }
            }
        }
        return bedroom;
    }

}
