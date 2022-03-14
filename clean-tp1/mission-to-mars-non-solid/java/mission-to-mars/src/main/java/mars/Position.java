package mars;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@EqualsAndHashCode
@ToString
public class Position {

	@Getter
	private int x;
	@Getter
	private int y;
	@Getter
	private int z;

	public Position(int x, int y, int z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

}