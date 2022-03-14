using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mission_to_mars
{
    public class Helicoptere : Rover, IModuleMartien
    {
        public Helicoptere(Direction direction, Position position) : base(direction, position)
        {
        }

        public override void Monter()
        {
            Position = Position with { Z = Position.Z + 1 };
        }


        public override void Descendre()
        {
            Position = Position with { Z = Position.Z - 1 };
        }
    }
}
