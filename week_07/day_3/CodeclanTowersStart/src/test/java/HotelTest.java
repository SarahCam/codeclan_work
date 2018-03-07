import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Array;
import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public class HotelTest {

    Hotel hotel;
    BedRoom singleRoom;
    BedRoom doubleRoom;
    BedRoom suite;
    Guest guest;
    ConferenceRoom conferenceRoom;
    DiningRoom diningRoom;

    @Before
    public void before(){
        singleRoom = new BedRoom(RoomType.SINGLE, 25.00, 101);
        doubleRoom  = new BedRoom(RoomType.DOUBLE, 50.00, 201);
        suite  = new BedRoom(RoomType.SUITE, 100.00, 301);
        guest = new Guest("Sybil Fawlty");
        conferenceRoom = new ConferenceRoom(100, "Conference Room B", 200);
        diningRoom = new DiningRoom(50, "The Ritz");
        ArrayList<Room> testRooms = new ArrayList<>();
        testRooms.add(singleRoom);
        testRooms.add(suite);
        testRooms.add(conferenceRoom);
        testRooms.add(diningRoom);
        hotel = new Hotel(testRooms);
    }

    @Test
    public void canCheckIntoSingleRoom() {
        ArrayList<Guest> testGuests = new ArrayList<>();
        testGuests.add(guest);
        hotel.checkIntoBedRoom(testGuests, 101);
        BedRoom room = hotel.getBedRoom(101);
        assertEquals(1, room.getCheckedInGuestCount());
    }
}
