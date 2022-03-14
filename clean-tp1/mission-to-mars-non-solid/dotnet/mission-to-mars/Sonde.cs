using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mission_to_mars
{
    public class Sonde
    {
        public void PreparerRécupération(IModuleMartien module)
        {
            if(module is Helicoptere)
            {
                PoserHelicoptere(module);
            }

            module.ActiverRecuperation();
        }

        private void PoserHelicoptere(IModuleMartien module)
        {
            int altitude = module.Position.Z;
            Atterir(module, altitude);
        }

        private void Atterir(IModuleMartien module, int altitude)
        {
            foreach (var _ in Enumerable.Range(0, altitude))
            {
                module.Descendre();
            }
        }
    }
}
