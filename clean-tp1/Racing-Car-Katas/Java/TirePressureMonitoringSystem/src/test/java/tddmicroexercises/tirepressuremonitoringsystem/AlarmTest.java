package tddmicroexercises.tirepressuremonitoringsystem;

import static org.junit.jupiter.api.Assertions.assertFalse;

import org.junit.jupiter.api.Test;

public class AlarmTest {

    @Test
    public void foo() {
        Alarm alarm = new Alarm();
        assertFalse(alarm.isAlarmOn());
    }

/*    @Test
    public void fooo() {
        Alarm alarm = new Alarm();
        alarm.check();
        assertFalse(!alarm.isAlarmOn());
    }*/
}
