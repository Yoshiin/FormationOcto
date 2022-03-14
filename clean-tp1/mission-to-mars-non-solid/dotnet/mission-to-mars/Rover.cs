using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mission_to_mars
{
    public class Rover : IModuleMartien
    {
        public bool IsPretPourRecuperation { get; private set; }

        public Position Position { get; protected set; }

        private readonly Direction _direction;

        public Rover(Direction direction, Position position)
        {
            _direction = direction;
            Position = position;
        }

        public void ActiverRecuperation()
        {
            this.IsPretPourRecuperation = true;
        }

        public void Avancer()
        {
            Position = _direction switch
            {
                Direction.NORD => Position with { Y = Position.Y + 1 },
                Direction.SUD => Position with { Y = Position.Y - 1 },
                Direction.EST => Position with { X = Position.Y + 1 },
                _ => Position with { X = Position.Y - 1 },
            };
        }


        public void Reculer()
        {
            Position = _direction switch
            {
                Direction.NORD => Position with { Y = Position.Y - 1 },
                Direction.SUD => Position with { Y = Position.Y + 1 },
                Direction.EST => Position with { X = Position.Y - 1 },
                _ => Position with { X = Position.Y + 1 },
            };
        }

        public virtual void Descendre()
        {
            throw new NotImplementedException("Un rover ne vole pas");
        }

        public virtual void Monter()
        {
            throw new NotImplementedException("Un rover ne vole pas");
        }

    }
}
