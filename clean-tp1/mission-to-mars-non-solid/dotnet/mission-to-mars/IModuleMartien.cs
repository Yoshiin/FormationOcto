using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mission_to_mars
{
    public interface IModuleMartien
    {
        void Avancer();

        void Reculer();

        void Monter();

        void Descendre();

        void ActiverRecuperation();

        bool IsPretPourRecuperation { get; }
        
        Position Position { get; }
    }
}
