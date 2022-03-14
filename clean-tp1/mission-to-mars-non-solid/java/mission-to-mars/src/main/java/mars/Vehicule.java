package mars;

import lombok.Getter;

public class Vehicule {
    private Direction direction;
    @Getter
    protected Position position;
    @Getter
    private boolean pretPourRecuperation = false;

    public Vehicule(Direction direction, Position position) {
        this.direction = direction;
        this.position = position;
    }

    public void avancer() {
        switch (direction) {
            case NORD -> position = new Position(position.getX(), position.getY() + 1, position.getZ());
            case SUD -> position = new Position(position.getX(), position.getY() - 1, position.getZ());
            case OUEST -> position = new Position(position.getX() - 1, position.getY(), position.getZ());
            default -> position = new Position(position.getX() + 1, position.getY(), position.getZ());
        }
    }

    public void reculer() {
        switch (direction) {
            case NORD -> position = new Position(position.getX(), position.getY() - 1, position.getZ());
            case SUD -> position = new Position(position.getX(), position.getY() + 1, position.getZ());
            case OUEST -> position = new Position(position.getX() + 1, position.getY(), position.getZ());
            default -> position = new Position(position.getX() - 1, position.getY(), position.getZ());
        }
    }

    public void activerRecuperation() {
        pretPourRecuperation = true;
    }
}
