



import nacl from "tweetnacl";
import axios from 'axios';
require('dotenv').config()

const itemTitle = [
  "AK-47 | Red Laminate Factory New", "AK-47 | Red Laminate Minimal Wear",
  "AK-47 | Red Laminate Field-Tested", "AK-47 | Red Laminate Well-Worn",
  "AK-47 | Red Laminate Battle-Scarred", "AK-47 | Case Hardened Factory New",
  "AK-47 | Case Hardened Minimal Wear", "AK-47 | Case Hardened Field-Tested",
  "AK-47 | Case Hardened Well-Worn", "AK-47 | Case Hardened Battle-Scarred",
  "AK-47 | Safari Mesh Factory New", "AK-47 | Safari Mesh Minimal Wear",
  "AK-47 | Safari Mesh Field-Tested", "AK-47 | Safari Mesh Well-Worn",
  "AK-47 | Safari Mesh Battle-Scarred", "AK-47 | Jungle Spray Factory New",
  "AK-47 | Jungle Spray Minimal Wear", "AK-47 | Jungle Spray Field-Tested",
  "AK-47 | Jungle Spray Well-Worn", "AK-47 | Jungle Spray Battle-Scarred",
  "AK-47 | Predator Factory New", "AK-47 | Predator Minimal Wear",
  "AK-47 | Predator Field-Tested", "AK-47 | Predator Well-Worn",
  "AK-47 | Predator Battle-Scarred", "AK-47 | Black Laminate Factory New",
  "AK-47 | Black Laminate Minimal Wear", "AK-47 | Black Laminate Field-Tested",
  "AK-47 | Black Laminate Well-Worn", "AK-47 | Black Laminate Battle-Scarred",
  "AK-47 | Fire Serpent Factory New", "AK-47 | Fire Serpent Minimal Wear",
  "AK-47 | Fire Serpent Field-Tested", "AK-47 | Fire Serpent Well-Worn",
  "AK-47 | Fire Serpent Battle-Scarred", "AK-47 | Blue Laminate Factory New",
  "AK-47 | Blue Laminate Minimal Wear", "AK-47 | Blue Laminate Field-Tested",
  "AK-47 | Blue Laminate Well-Worn", "AK-47 | Redline Minimal Wear",
  "AK-47 | Redline Field-Tested", "AK-47 | Redline Well-Worn",
  "AK-47 | Redline Battle-Scarred", "AK-47 | Emerald Pinstripe Factory New",
  "AK-47 | Emerald Pinstripe Minimal Wear",
  "AK-47 | Emerald Pinstripe Field-Tested",
  "AK-47 | Emerald Pinstripe Well-Worn", "AK-47 | Emerald Pinstripe Battle-Scarred",
  "AK-47 | Vulcan Factory New", "AK-47 | Vulcan Minimal Wear",
  "AK-47 | Vulcan Field-Tested", "AK-47 | Vulcan Well-Worn",
  "AK-47 | Vulcan Battle-Scarred", "AK-47 | Jaguar Factory New",
  "AK-47 | Jaguar Minimal Wear", "AK-47 | Jaguar Field-Tested",
  "AK-47 | Jaguar Well-Worn", "AK-47 | Jaguar Battle-Scarred",
  "AK-47 | Jet Set Factory New", "AK-47 | Jet Set Minimal Wear",
  "AK-47 | Jet Set Field-Tested", "AK-47 | Jet Set Well-Worn",
  "AK-47 | Jet Set Battle-Scarred", "AK-47 | First Class Factory New",
  "AK-47 | First Class Minimal Wear", "AK-47 | First Class Field-Tested",
  "AK-47 | First Class Well-Worn", "AK-47 | First Class Battle-Scarred",
  "AK-47 | Wasteland Rebel Factory New", "AK-47 | Wasteland Rebel Minimal Wear",
  "AK-47 | Wasteland Rebel Field-Tested", "AK-47 | Wasteland Rebel Well-Worn",
  "AK-47 | Wasteland Rebel Battle-Scarred",
  "AK-47 | Cartel Factory New", "AK-47 | Cartel Minimal Wear",
  "AK-47 | Cartel Field-Tested", "AK-47 | Cartel Well-Worn",
  "AK-47 | Cartel Battle-Scarred", "AK-47 | Elite Build Factory New",
  "AK-47 | Elite Build Minimal Wear", "AK-47 | Elite Build Field-Tested",
  "AK-47 | Elite Build Well-Worn", "AK-47 | Elite Build Battle-Scarred",
  "AK-47 | Hydroponic Factory New", "AK-47 | Hydroponic Minimal Wear",
  "AK-47 | Hydroponic Field-Tested", "AK-47 | Hydroponic Well-Worn",
  "AK-47 | Hydroponic Battle-Scarred", "AK-47 | Aquamarine Revenge Factory New",
  "AK-47 | Aquamarine Revenge Minimal Wear",
  "AK-47 | Aquamarine Revenge Field-Tested",
  "AK-47 | Aquamarine Revenge Well-Worn", "AK-47 | Aquamarine Revenge Battle-Scarred",
  "AK-47 | Frontside Misty Factory New", "AK-47 | Frontside Misty Minimal Wear",
  "AK-47 | Frontside Misty Field-Tested", "AK-47 | Frontside Misty Well-Worn",
  "AK-47 | Frontside Misty Battle-Scarred",
  "AK-47 | Point Disarray Factory New", "AK-47 | Point Disarray Minimal Wear",
  "AK-47 | Point Disarray Field-Tested", "AK-47 | Point Disarray Well-Worn",
  "AK-47 | Point Disarray Battle-Scarred", "AK-47 | Fuel Injector Factory New",
  "AK-47 | Fuel Injector Minimal Wear", "AK-47 | Fuel Injector Field-Tested",
  "AK-47 | Fuel Injector Well-Worn", "AK-47 | Fuel Injector Battle-Scarred",
  "AK-47 | Neon Revolution Factory New", "AK-47 | Neon Revolution Minimal Wear",
  "AK-47 | Neon Revolution Field-Tested", "AK-47 | Neon Revolution Well-Worn",
  "AK-47 | Neon Revolution Battle-Scarred",
  "AK-47 | Bloodsport Factory New", "AK-47 | Bloodsport Minimal Wear",
  "AK-47 | Bloodsport Field-Tested", "AK-47 | Bloodsport Well-Worn",
  "AK-47 | Orbit Mk01 Factory New", "AK-47 | Orbit Mk01 Minimal Wear",
  "AK-47 | Orbit Mk01 Field-Tested", "AK-47 | Orbit Mk01 Well-Worn",
  "AK-47 | Orbit Mk01 Battle-Scarred", "AK-47 | The Empress Factory New",
  "AK-47 | The Empress Minimal Wear", "AK-47 | The Empress Field-Tested",
  "AK-47 | The Empress Well-Worn", "AK-47 | The Empress Battle-Scarred",
  "AK-47 | Neon Rider Factory New", "AK-47 | Neon Rider Minimal Wear",
  "AK-47 | Neon Rider Field-Tested", "AK-47 | Neon Rider Well-Worn",
  "AK-47 | Neon Rider Battle-Scarred", "AK-47 | Wild Lotus Factory New",
  "AK-47 | Wild Lotus Minimal Wear", "AK-47 | Wild Lotus Field-Tested",
  "AK-47 | Wild Lotus Well-Worn", "AK-47 | Wild Lotus Battle-Scarred",
  "AK-47 | Baroque Purple Factory New", "AK-47 | Baroque Purple Minimal Wear",
  "AK-47 | Baroque Purple Field-Tested", "AK-47 | Baroque Purple Well-Worn",
  "AK-47 | Baroque Purple Battle-Scarred", "AK-47 | Safety Net Factory New",
  "AK-47 | Safety Net Minimal Wear", "AK-47 | Safety Net Field-Tested",
  "AK-47 | Safety Net Well-Worn", "AK-47 | Safety Net Battle-Scarred",
  "AK-47 | Asiimov Factory New", "AK-47 | Asiimov Minimal Wear",
  "AK-47 | Asiimov Field-Tested", "AK-47 | Asiimov Well-Worn",
  "AK-47 | Asiimov Battle-Scarred", "AK-47 | Uncharted Factory New",
  "AK-47 | Uncharted Minimal Wear", "AK-47 | Uncharted Field-Tested",
  "AK-47 | Uncharted Well-Worn", "AK-47 | Uncharted Battle-Scarred",
  "AK-47 | Rat Rod Factory New", "AK-47 | Rat Rod Minimal Wear",
  "AK-47 | Rat Rod Field-Tested", "AK-47 | Rat Rod Well-Worn",
  "AK-47 | Rat Rod Battle-Scarred", "AK-47 | Gold Arabesque Factory New",
  "AK-47 | Gold Arabesque Minimal Wear", "AK-47 | Gold Arabesque Field-Tested",
  "AK-47 | Gold Arabesque Well-Worn", "AK-47 | Gold Arabesque Battle-Scarred",
  "AK-47 | Phantom Disruptor Factory New", "AK-47 | Phantom Disruptor Minimal Wear",
  "AK-47 | Phantom Disruptor Field-Tested",
  "AK-47 | Phantom Disruptor Well-Worn", "AK-47 | Phantom Disruptor Battle-Scarred",
  "AK-47 | Legion of Anubis Factory New", "AK-47 | Legion of Anubis Minimal Wear",
  "AK-47 | Legion of Anubis Field-Tested", "AK-47 | Legion of Anubis Well-Worn",
  "AK-47 | Legion of Anubis Battle-Scarred",
  "AK-47 | X-Ray Factory New", "AK-47 | X-Ray Minimal Wear",
  "AK-47 | X-Ray Field-Tested", "AK-47 | X-Ray Well-Worn",
  "AK-47 | X-Ray Battle-Scarred", "AK-47 | Panthera onca Factory New",
  "AK-47 | Panthera onca Minimal Wear", "AK-47 | Panthera onca Field-Tested",
  "AK-47 | Panthera onca Well-Worn", "AK-47 | Panthera onca Battle-Scarred",
  "AK-47 | Slate Factory New", "AK-47 | Slate Minimal Wear",
  "AK-47 | Slate Field-Tested", "AK-47 | Slate Well-Worn",
  "AK-47 | Slate Battle-Scarred", "AK-47 | Green Laminate Factory New",
  "AK-47 | Green Laminate Minimal Wear", "AK-47 | Green Laminate Field-Tested",
  "AK-47 | Green Laminate Well-Worn", "AK-47 | Leet Museo Factory New",
  "AK-47 | Leet Museo Minimal Wear", "AK-47 | Leet Museo Field-Tested",
  "AK-47 | Leet Museo Well-Worn", "AK-47 | Leet Museo Battle-Scarred",
  "AK-47 | Nightwish Factory New", "AK-47 | Nightwish Minimal Wear",
  "AK-47 | Nightwish Field-Tested", "AK-47 | Nightwish Well-Worn",
  "AK-47 | Nightwish Battle-Scarred", "AK-47 | Ice Coaled Factory New",
  "AK-47 | Ice Coaled Minimal Wear", "AK-47 | Ice Coaled Field-Tested",
  "AK-47 | Ice Coaled Well-Worn", "AK-47 | Ice Coaled Battle-Scarred",
  "AK-47 | Inheritance Factory New", "AK-47 | Inheritance Minimal Wear",
  "AK-47 | Inheritance Field-Tested", "AK-47 | Inheritance Well-Worn",
  "AK-47 | Inheritance Battle-Scarred", "AK-47 | Head Shot Factory New",
  "AK-47 | Head Shot Minimal Wear", "AK-47 | Head Shot Field-Tested",
  "AK-47 | Head Shot Well-Worn", "AK-47 | Head Shot Battle-Scarred",
  "AK-47 | Steel Delta Factory New", "AK-47 | Steel Delta Minimal Wear",
  "AK-47 | Steel Delta Field-Tested", "AK-47 | Steel Delta Well-Worn",
  "AK-47 | Steel Delta Battle-Scarred", "AUG | Bengal Tiger Factory New",
 "AWP | Snake Camo Minimal Wear", "AWP | Snake Camo Field-Tested",
  "AWP | Snake Camo Well-Worn", "AWP | Snake Camo Battle-Scarred",
  "AWP | Lightning Strike Factory New", "AWP | Lightning Strike Minimal Wear",
  "AWP | Safari Mesh Factory New", "AWP | Safari Mesh Minimal Wear",
  "AWP | Safari Mesh Field-Tested", "AWP | Safari Mesh Well-Worn",
  "AWP | Safari Mesh Battle-Scarred", "AWP | Pink DDPAT Factory New",
  "AWP | Pink DDPAT Minimal Wear", "AWP | Pink DDPAT Field-Tested",
  "AWP | Pink DDPAT Well-Worn", "AWP | Pink DDPAT Battle-Scarred",
  "AWP | BOOM Factory New", "AWP | BOOM Minimal Wear",
  "AWP | BOOM Field-Tested", "AWP | Corticera Factory New",
  "AWP | Corticera Minimal Wear", "AWP | Corticera Field-Tested",
  "AWP | Graphite Factory New", "AWP | Graphite Minimal Wear",
  "AWP | Electric Hive Factory New", "AWP | Electric Hive Minimal Wear",
  "AWP | Electric Hive Field-Tested", "AWP | Electric Hive Well-Worn",
  "AWP | Pit Viper Minimal Wear", "AWP | Pit Viper Field-Tested",
  "AWP | Pit Viper Well-Worn", "AWP | Pit Viper Battle-Scarred",
  "AWP | Redline Minimal Wear", "AWP | Redline Field-Tested",
  "AWP | Redline Well-Worn", "AWP | Asiimov Field-Tested",
  "AWP | Asiimov Well-Worn", "AWP | Asiimov Battle-Scarred",
  "AWP | Dragon Lore Factory New", "AWP | Dragon Lore Minimal Wear",
  "AWP | Dragon Lore Field-Tested", "AWP | Dragon Lore Well-Worn",
  "AWP | Dragon Lore Battle-Scarred", "AWP | Man-o'-war Minimal Wear",
  "AWP | Man-o'-war Field-Tested", "AWP | Worm God Factory New",
  "AWP | Worm God Minimal Wear", "AWP | Worm God Field-Tested",
  "AWP | Worm God Well-Worn", "AWP | Medusa Factory New",
  "AWP | Medusa Minimal Wear", "AWP | Medusa Field-Tested",
  "AWP | Medusa Well-Worn", "AWP | Medusa Battle-Scarred",
  "AWP | Sun in Leo Factory New", "AWP | Sun in Leo Minimal Wear",
  "AWP | Sun in Leo Field-Tested", "AWP | Sun in Leo Well-Worn",
  "AWP | Sun in Leo Battle-Scarred", "AWP | Hyper Beast Factory New",
  "AWP | Hyper Beast Minimal Wear", "AWP | Hyper Beast Field-Tested",
  "AWP | Hyper Beast Well-Worn", "AWP | Hyper Beast Battle-Scarred",
  "AWP | Elite Build Factory New", "AWP | Elite Build Minimal Wear",
  "AWP | Elite Build Field-Tested", "AWP | Elite Build Well-Worn",
  "AWP | Elite Build Battle-Scarred", "AWP | Phobos Factory New",
  "AWP | Phobos Minimal Wear", "AWP | Phobos Field-Tested",
  "AWP | Phobos Well-Worn", "AWP | Fever Dream Factory New",
  "AWP | Fever Dream Minimal Wear", "AWP | Fever Dream Field-Tested",
  "AWP | Fever Dream Well-Worn", "AWP | Fever Dream Battle-Scarred",
  "AWP | Oni Taiji Factory New", "AWP | Oni Taiji Minimal Wear",
  "AWP | Oni Taiji Field-Tested", "AWP | Oni Taiji Well-Worn",
  "AWP | Oni Taiji Battle-Scarred", "AWP | Mortis Factory New",
  "AWP | Mortis Minimal Wear", "AWP | Mortis Field-Tested",
  "AWP | Mortis Well-Worn", "AWP | Mortis Battle-Scarred",
  "AWP | PAW Factory New", "AWP | PAW Minimal Wear",
  "AWP | PAW Field-Tested", "AWP | PAW Well-Worn",
  "AWP | PAW Battle-Scarred", "AWP | The Prince Factory New",
  "AWP | The Prince Minimal Wear", "AWP | The Prince Field-Tested",
  "AWP | The Prince Well-Worn", "AWP | The Prince Battle-Scarred",
  "AWP | Gungnir Factory New", "AWP | Gungnir Minimal Wear",
  "AWP | Gungnir Field-Tested", "AWP | Gungnir Well-Worn",
  "AWP | Gungnir Battle-Scarred", "AWP | Acheron Factory New",
  "AWP | Acheron Minimal Wear", "AWP | Acheron Field-Tested",
  "AWP | Acheron Well-Worn", "AWP | Acheron Battle-Scarred",
  "AWP | Neo-Noir Factory New", "AWP | Neo-Noir Minimal Wear",
  "AWP | Neo-Noir Field-Tested", "AWP | Neo-Noir Well-Worn",
  "AWP | Neo-Noir Battle-Scarred", "AWP | Desert Hydra Factory New",
  "AWP | Desert Hydra Minimal Wear", "AWP | Desert Hydra Field-Tested",
  "AWP | Desert Hydra Well-Worn", "AWP | Desert Hydra Battle-Scarred",
  "AWP | Atheris Factory New", "AWP | Atheris Minimal Wear",
  "AWP | Atheris Field-Tested", "AWP | Atheris Well-Worn",
  "AWP | Atheris Battle-Scarred", "AWP | Containment Breach Factory New",
  "AWP | Containment Breach Minimal Wear", "AWP | Containment Breach Field-Tested",
  "AWP | Containment Breach Well-Worn", "AWP | Containment Breach Battle-Scarred",
  "AWP | Wildfire Factory New", "AWP | Wildfire Minimal Wear",
  "AWP | Wildfire Field-Tested", "AWP | Wildfire Well-Worn",
  "AWP | Wildfire Battle-Scarred", "AWP | Capillary Factory New",
  "AWP | Capillary Minimal Wear", "AWP | Capillary Field-Tested",
  "AWP | Capillary Well-Worn", "AWP | Capillary Battle-Scarred",
  "AWP | Exoskeleton Factory New", "AWP | Exoskeleton Minimal Wear",
  "AWP | Exoskeleton Field-Tested", "AWP | Exoskeleton Well-Worn",
  "AWP | Exoskeleton Battle-Scarred", "AWP | Fade Factory New",
  "AWP | Fade Minimal Wear", "AWP | Silk Tiger Factory New",
  "AWP | Silk Tiger Minimal Wear", "AWP | Silk Tiger Field-Tested",
  "AWP | Silk Tiger Well-Worn", "AWP | Silk Tiger Battle-Scarred",
  "AWP | POP AWP Factory New", "AWP | POP AWP Minimal Wear",
  "AWP | POP AWP Field-Tested", "AWP | POP AWP Well-Worn",
  "AWP | Chromatic Aberration Factory New",
  "AWP | Chromatic Aberration Minimal Wear",
  "AWP | Chromatic Aberration Field-Tested",
  "AWP | Chromatic Aberration Well-Worn", "AWP | Chromatic Aberration Battle-Scarred",
  "AWP | Chrome Cannon Factory New", "AWP | Chrome Cannon Minimal Wear",
  "AWP | Chrome Cannon Field-Tested", "AWP | Chrome Cannon Well-Worn",
  "AWP | Chrome Cannon Battle-Scarred", "AWP | Duality Factory New",
  "AWP | Duality Minimal Wear", "AWP | Duality Field-Tested",
  "AWP | Duality Well-Worn", "AWP | Duality Battle-Scarred",
  "AWP | Black Nile Factory New", "AWP | Black Nile Minimal Wear",
  "AWP | Black Nile Field-Tested", "AWP | Black Nile Well-Worn",
  "AWP | Black Nile Battle-Scarred", "FAMAS | Contrast Spray Factory New",
  "FAMAS | Contrast Spray Minimal Wear", "FAMAS | Contrast Spray Field-Tested",
  "FAMAS | Contrast Spray Well-Worn", "FAMAS | Contrast Spray Battle-Scarred",
  "FAMAS | Colony Factory New", "FAMAS | Colony Minimal Wear",
  "FAMAS | Colony Field-Tested", "FAMAS | Colony Well-Worn",
  "FAMAS | Colony Battle-Scarred", "FAMAS | Dark Water Minimal Wear",
  "FAMAS | Dark Water Field-Tested", "FAMAS | Cyanospatter Factory New",
  "FAMAS | Cyanospatter Minimal Wear", "FAMAS | Cyanospatter Field-Tested",
  "FAMAS | Cyanospatter Well-Worn", "FAMAS | Cyanospatter Battle-Scarred",
  "FAMAS | Afterimage Factory New", "FAMAS | Afterimage Minimal Wear",
  "FAMAS | Afterimage Field-Tested", "FAMAS | Afterimage Well-Worn",
  "FAMAS | Doomkitty Minimal Wear", "FAMAS | Doomkitty Field-Tested",
  "FAMAS | Spitfire Factory New", "FAMAS | Spitfire Minimal Wear",
  "FAMAS | Spitfire Field-Tested", "FAMAS | Spitfire Well-Worn",
  "FAMAS | Spitfire Battle-Scarred", "FAMAS | Hexane Factory New",
  "FAMAS | Hexane Minimal Wear", "FAMAS | Hexane Field-Tested",
  "FAMAS | Hexane Well-Worn", "FAMAS | CaliCamo Factory New",
  "FAMAS | CaliCamo Minimal Wear", "FAMAS | CaliCamo Field-Tested",
  "FAMAS | CaliCamo Well-Worn", "FAMAS | CaliCamo Battle-Scarred",
  "FAMAS | Teardown Factory New", "FAMAS | Teardown Minimal Wear",
  "FAMAS | Teardown Field-Tested", "FAMAS | Teardown Well-Worn",
  "FAMAS | Teardown Battle-Scarred", "FAMAS | Pulse Factory New",
  "FAMAS | Pulse Minimal Wear", "FAMAS | Pulse Field-Tested",
  "FAMAS | Pulse Well-Worn", "FAMAS | Sergeant Minimal Wear",
  "FAMAS | Sergeant Field-Tested", "FAMAS | Sergeant Well-Worn",
  "FAMAS | Sergeant Battle-Scarred", "FAMAS | Styx Factory New",
  "FAMAS | Styx Minimal Wear", "FAMAS | Styx Field-Tested",
  "FAMAS | Styx Well-Worn", "FAMAS | Styx Battle-Scarred",
  "FAMAS | Djinn Factory New", "FAMAS | Djinn Minimal Wear",
  "FAMAS | Djinn Field-Tested", "FAMAS | Djinn Well-Worn",
  "FAMAS | Djinn Battle-Scarred", "FAMAS | Neural Net Factory New",
  "FAMAS | Neural Net Minimal Wear", "FAMAS | Neural Net Field-Tested",
  "FAMAS | Neural Net Well-Worn", "FAMAS | Neural Net Battle-Scarred",
  "FAMAS | Survivor Z Factory New", "FAMAS | Survivor Z Minimal Wear",
  "FAMAS | Survivor Z Field-Tested", "FAMAS | Survivor Z Well-Worn",
  "FAMAS | Survivor Z Battle-Scarred", "FAMAS | Valence Factory New",
  "FAMAS | Valence Minimal Wear", "FAMAS | Valence Field-Tested",
  "FAMAS | Valence Well-Worn", "FAMAS | Valence Battle-Scarred",
  "FAMAS | Roll Cage Factory New", "FAMAS | Roll Cage Minimal Wear",
  "FAMAS | Roll Cage Field-Tested", "FAMAS | Roll Cage Well-Worn",
  "FAMAS | Roll Cage Battle-Scarred", "FAMAS | Mecha Industries Factory New",
  "FAMAS | Mecha Industries Minimal Wear", "FAMAS | Mecha Industries Field-Tested",
  "FAMAS | Mecha Industries Well-Worn", "FAMAS | Mecha Industries Battle-Scarred",
  "FAMAS | Macabre Factory New", "FAMAS | Macabre Minimal Wear",
  "FAMAS | Macabre Field-Tested", "FAMAS | Macabre Well-Worn",
  "FAMAS | Macabre Battle-Scarred", "FAMAS | Eye of Athena Factory New",
  "FAMAS | Eye of Athena Minimal Wear", "FAMAS | Eye of Athena Field-Tested",
  "FAMAS | Eye of Athena Well-Worn", "FAMAS | Eye of Athena Battle-Scarred",
  "FAMAS | Crypsis Factory New", "FAMAS | Crypsis Minimal Wear",
  "FAMAS | Crypsis Field-Tested", "FAMAS | Crypsis Well-Worn",
  "FAMAS | Crypsis Battle-Scarred", "FAMAS | Night Borre Factory New",
  "FAMAS | Night Borre Minimal Wear", "FAMAS | Night Borre Field-Tested",
  "FAMAS | Night Borre Well-Worn", "FAMAS | Night Borre Battle-Scarred",
  "FAMAS | Sundown Factory New", "FAMAS | Sundown Minimal Wear",
  "FAMAS | Sundown Field-Tested", "FAMAS | Sundown Well-Worn",
  "FAMAS | Sundown Battle-Scarred", "FAMAS | Decommissioned Factory New",
  "FAMAS | Decommissioned Minimal Wear", "FAMAS | Decommissioned Field-Tested",
  "FAMAS | Decommissioned Well-Worn", "FAMAS | Decommissioned Battle-Scarred",
  "FAMAS | Commemoration Factory New", "FAMAS | Commemoration Minimal Wear",
  "FAMAS | Commemoration Field-Tested", "FAMAS | Commemoration Well-Worn",
  "FAMAS | Commemoration Battle-Scarred", "FAMAS | Prime Conspiracy Factory New",
  "FAMAS | Prime Conspiracy Minimal Wear", "FAMAS | Prime Conspiracy Field-Tested",
  "FAMAS | Prime Conspiracy Well-Worn", "FAMAS | Prime Conspiracy Battle-Scarred",
  "FAMAS | Meltdown Factory New", "FAMAS | Meltdown Minimal Wear",
  "FAMAS | Meltdown Field-Tested", "FAMAS | Meltdown Well-Worn",
  "FAMAS | Faulty Wiring Factory New", "FAMAS | Faulty Wiring Minimal Wear",
  "FAMAS | Faulty Wiring Field-Tested", "FAMAS | Faulty Wiring Well-Worn",
  "FAMAS | Faulty Wiring Battle-Scarred", "FAMAS | ZX Spectron Factory New",
  "FAMAS | ZX Spectron Minimal Wear", "FAMAS | ZX Spectron Field-Tested",
  "FAMAS | ZX Spectron Well-Worn", "FAMAS | ZX Spectron Battle-Scarred",
  "FAMAS | Rapid Eye Movement Factory New",
  "FAMAS | Rapid Eye Movement Minimal Wear",
  "FAMAS | Rapid Eye Movement Field-Tested",
  "FAMAS | Rapid Eye Movement Well-Worn", "FAMAS | Rapid Eye Movement Battle-Scarred",
  "FAMAS | Meow 36 Factory New", "FAMAS | Meow 36 Minimal Wear",
  "FAMAS | Meow 36 Field-Tested", "FAMAS | Meow 36 Well-Worn",
  "FAMAS | Meow 36 Battle-Scarred", "FAMAS | Waters of Nephthys Factory New",
  "FAMAS | Waters of Nephthys Minimal Wear",
  "FAMAS | Waters of Nephthys Field-Tested",
  "FAMAS | Waters of Nephthys Well-Worn", "FAMAS | Waters of Nephthys Battle-Scarred",
  "G3SG1 | Arctic Camo Factory New", "G3SG1 | Arctic Camo Minimal Wear",
  "G3SG1 | Arctic Camo Field-Tested", "G3SG1 | Arctic Camo Well-Worn",
  "G3SG1 | Arctic Camo Battle-Scarred", "G3SG1 | Desert Storm Factory New",
  "G3SG1 | Desert Storm Minimal Wear", "G3SG1 | Desert Storm Field-Tested",
  "G3SG1 | Desert Storm Well-Worn", "G3SG1 | Desert Storm Battle-Scarred",
  "G3SG1 | Contractor Factory New", "G3SG1 | Contractor Minimal Wear",
  "G3SG1 | Contractor Field-Tested", "G3SG1 | Contractor Well-Worn",
  "G3SG1 | Contractor Battle-Scarred", "G3SG1 | Safari Mesh Factory New",
  "G3SG1 | Safari Mesh Minimal Wear", "G3SG1 | Safari Mesh Field-Tested",
  "G3SG1 | Safari Mesh Well-Worn", "G3SG1 | Safari Mesh Battle-Scarred",
  "G3SG1 | Polar Camo Factory New", "G3SG1 | Polar Camo Minimal Wear",
  "G3SG1 | Polar Camo Field-Tested", "G3SG1 | Polar Camo Well-Worn",
  "G3SG1 | Polar Camo Battle-Scarred", "G3SG1 | Jungle Dashed Factory New",
  "G3SG1 | Jungle Dashed Minimal Wear", "G3SG1 | Jungle Dashed Field-Tested",
  "G3SG1 | Jungle Dashed Well-Worn", "G3SG1 | Jungle Dashed Battle-Scarred",
  "G3SG1 | Demeter Factory New", "G3SG1 | Demeter Minimal Wear",
  "G3SG1 | Demeter Field-Tested", "G3SG1 | Demeter Well-Worn",
  "G3SG1 | Demeter Battle-Scarred", "G3SG1 | Azure Zebra Factory New",
  "G3SG1 | Azure Zebra Minimal Wear", "G3SG1 | Azure Zebra Field-Tested",
  "G3SG1 | VariCamo Factory New", "G3SG1 | VariCamo Minimal Wear",
  "G3SG1 | VariCamo Field-Tested", "G3SG1 | VariCamo Well-Worn",
  "G3SG1 | VariCamo Battle-Scarred", "G3SG1 | Green Apple Factory New",
  "G3SG1 | Green Apple Minimal Wear", "G3SG1 | Green Apple Field-Tested",
  "G3SG1 | Murky Factory New", "G3SG1 | Murky Minimal Wear",
  "G3SG1 | Murky Field-Tested", "G3SG1 | Chronos Factory New",
  "G3SG1 | Chronos Minimal Wear", "G3SG1 | Chronos Field-Tested",
  "G3SG1 | Chronos Well-Worn", "G3SG1 | Orange Kimono Factory New",
  "G3SG1 | Orange Kimono Minimal Wear", "G3SG1 | Orange Kimono Field-Tested",
  "G3SG1 | Orange Kimono Well-Worn", "G3SG1 | Orange Kimono Battle-Scarred",
  "G3SG1 | Flux Factory New", "G3SG1 | Flux Minimal Wear",
  "G3SG1 | Flux Field-Tested", "G3SG1 | Flux Well-Worn",
  "G3SG1 | Flux Battle-Scarred", "G3SG1 | The Executioner Minimal Wear",
  "G3SG1 | The Executioner Field-Tested", "G3SG1 | The Executioner Well-Worn",
  "G3SG1 | The Executioner Battle-Scarred",
  "G3SG1 | Orange Crash Factory New", "G3SG1 | Orange Crash Minimal Wear",
  "G3SG1 | Orange Crash Field-Tested", "G3SG1 | Orange Crash Well-Worn",
  "G3SG1 | Orange Crash Battle-Scarred", "G3SG1 | Ventilator Factory New",
  "G3SG1 | Ventilator Minimal Wear", "G3SG1 | Ventilator Field-Tested",
  "G3SG1 | Ventilator Well-Worn", "G3SG1 | Stinger Factory New",
  "G3SG1 | Stinger Minimal Wear", "G3SG1 | Stinger Field-Tested",
  "G3SG1 | Stinger Well-Worn", "G3SG1 | Stinger Battle-Scarred",
  "G3SG1 | Hunter Factory New", "G3SG1 | Hunter Minimal Wear",
  "G3SG1 | Hunter Field-Tested", "G3SG1 | Hunter Well-Worn",
  "G3SG1 | Hunter Battle-Scarred", "G3SG1 | High Seas Factory New",
  "G3SG1 | High Seas Minimal Wear", "G3SG1 | High Seas Field-Tested",
  "G3SG1 | High Seas Well-Worn", "G3SG1 | High Seas Battle-Scarred",
  "G3SG1 | Violet Murano Factory New", "G3SG1 | Violet Murano Minimal Wear",
  "G3SG1 | Violet Murano Field-Tested", "G3SG1 | Violet Murano Well-Worn",
  "G3SG1 | Violet Murano Battle-Scarred", "G3SG1 | Scavenger Factory New",
  "G3SG1 | Scavenger Minimal Wear", "G3SG1 | Scavenger Field-Tested",
  "G3SG1 | Scavenger Well-Worn", "G3SG1 | Scavenger Battle-Scarred",
  "G3SG1 | Black Sand Factory New", "G3SG1 | Black Sand Minimal Wear",
  "G3SG1 | Black Sand Field-Tested", "G3SG1 | Black Sand Well-Worn",
  "G3SG1 | Black Sand Battle-Scarred", "G3SG1 | New Roots Factory New",
  "G3SG1 | New Roots Minimal Wear", "G3SG1 | New Roots Field-Tested",
  "G3SG1 | New Roots Well-Worn", "G3SG1 | New Roots Battle-Scarred",
  "G3SG1 | Digital Mesh Factory New", "G3SG1 | Digital Mesh Minimal Wear",
  "G3SG1 | Digital Mesh Field-Tested", "G3SG1 | Digital Mesh Well-Worn",
  "G3SG1 | Digital Mesh Battle-Scarred", "G3SG1 | Ancient Ritual Factory New",
  "G3SG1 | Ancient Ritual Minimal Wear", "G3SG1 | Ancient Ritual Field-Tested",
  "G3SG1 | Ancient Ritual Well-Worn", "G3SG1 | Ancient Ritual Battle-Scarred",
  "G3SG1 | Keeping Tabs Factory New", "G3SG1 | Keeping Tabs Minimal Wear",
  "G3SG1 | Keeping Tabs Field-Tested", "G3SG1 | Keeping Tabs Well-Worn",
  "G3SG1 | Keeping Tabs Battle-Scarred", "G3SG1 | Dream Glade Factory New",
  "G3SG1 | Dream Glade Minimal Wear", "G3SG1 | Dream Glade Field-Tested",
  "G3SG1 | Dream Glade Well-Worn", "G3SG1 | Dream Glade Battle-Scarred",
 "M4A4 | Desert Storm Minimal Wear", "M4A4 | Desert Storm Field-Tested",
  "M4A4 | Desert Storm Well-Worn", "M4A4 | Desert Storm Battle-Scarred",
  "M4A4 | Jungle Tiger Factory New", "M4A4 | Jungle Tiger Minimal Wear",
  "M4A4 | Jungle Tiger Field-Tested", "M4A4 | Jungle Tiger Well-Worn",
  "M4A4 | Jungle Tiger Battle-Scarred", "M4A4 | Urban DDPAT Factory New",
  "M4A4 | Urban DDPAT Minimal Wear", "M4A4 | Urban DDPAT Field-Tested",
  "M4A4 | Urban DDPAT Well-Worn", "M4A4 | Urban DDPAT Battle-Scarred",
  "M4A4 | Tornado Factory New", "M4A4 | Tornado Minimal Wear",
  "M4A4 | Tornado Field-Tested", "M4A4 | Tornado Well-Worn",
  "M4A4 | Tornado Battle-Scarred", "M4A4 | Bullet Rain Factory New",
  "M4A4 | Bullet Rain Minimal Wear", "M4A4 | Bullet Rain Field-Tested",
  "M4A4 | Bullet Rain Well-Worn", "M4A4 | Bullet Rain Battle-Scarred",
  "M4A4 | Modern Hunter Factory New", "M4A4 | Modern Hunter Minimal Wear",
  "M4A4 | Modern Hunter Field-Tested", "M4A4 | Modern Hunter Well-Worn",
  "M4A4 | Modern Hunter Battle-Scarred", "M4A4 | Radiation Hazard Factory New",
  "M4A4 | Radiation Hazard Minimal Wear", "M4A4 | Radiation Hazard Field-Tested",
  "M4A4 | Radiation Hazard Well-Worn", "M4A4 | Radiation Hazard Battle-Scarred",
  "M4A4 | Faded Zebra Factory New", "M4A4 | Faded Zebra Minimal Wear",
  "M4A4 | Faded Zebra Field-Tested", "M4A4 | Faded Zebra Well-Worn",
  "M4A4 | Faded Zebra Battle-Scarred", "M4A4 | Zirka Factory New",
  "M4A4 | Zirka Minimal Wear", "M4A4 | Zirka Field-Tested",
  "M4A4 | Zirka Well-Worn", "M4A4 | X-Ray Factory New",
  "M4A4 | X-Ray Minimal Wear", "M4A4 | X-Ray Field-Tested",
  "M4A4 | Asiimov Field-Tested", "M4A4 | Asiimov Well-Worn",
  "M4A4 | Asiimov Battle-Scarred", "M4A4 | Howl Factory New",
  "M4A4 | Howl Minimal Wear", "M4A4 | Howl Field-Tested",
  "M4A4 | Howl Well-Worn", "M4A4 | Desert-Strike Factory New",
  "M4A4 | Desert-Strike Minimal Wear", "M4A4 | Desert-Strike Field-Tested",
  "M4A4 | Desert-Strike Well-Worn", "M4A4 | Desert-Strike Battle-Scarred",
  "M4A4 | Griffin Factory New", "M4A4 | Griffin Minimal Wear",
  "M4A4 | Griffin Field-Tested", "M4A4 | Griffin Well-Worn",
  "M4A4 | Griffin Battle-Scarred", "M4A4 | 龍王 (Dragon King) Factory New",
  "M4A4 | 龍王 (Dragon King) Minimal Wear", "M4A4 | 龍王 (Dragon King) Field-Tested",
  "M4A4 | 龍王 (Dragon King) Well-Worn", "M4A4 | 龍王 (Dragon King) Battle-Scarred",
  "M4A4 | Poseidon Factory New", "M4A4 | Poseidon Minimal Wear",
  "M4A4 | Poseidon Field-Tested", "M4A4 | Daybreak Factory New",
  "M4A4 | Daybreak Minimal Wear", "M4A4 | Daybreak Field-Tested",
  "M4A4 | Daybreak Well-Worn", "M4A4 | Daybreak Battle-Scarred",
  "M4A4 | Evil Daimyo Factory New", "M4A4 | Evil Daimyo Minimal Wear",
  "M4A4 | Evil Daimyo Field-Tested", "M4A4 | Evil Daimyo Well-Worn",
  "M4A4 | Evil Daimyo Battle-Scarred", "M4A4 | Royal Paladin Factory New",
  "M4A4 | Royal Paladin Minimal Wear", "M4A4 | Royal Paladin Field-Tested",
  "M4A4 | Royal Paladin Well-Worn", "M4A4 | Royal Paladin Battle-Scarred",
  "M4A4 | The Battlestar Factory New", "M4A4 | The Battlestar Minimal Wear",
  "M4A4 | The Battlestar Field-Tested", "M4A4 | The Battlestar Well-Worn",
  "M4A4 | The Battlestar Battle-Scarred", "M4A4 | Desolate Space Factory New",
  "M4A4 | Desolate Space Minimal Wear", "M4A4 | Desolate Space Field-Tested",
  "M4A4 | Desolate Space Well-Worn", "M4A4 | Desolate Space Battle-Scarred",
  "M4A4 | Buzz Kill Factory New", "M4A4 | Buzz Kill Minimal Wear",
  "M4A4 | Buzz Kill Field-Tested", "M4A4 | Buzz Kill Well-Worn",
  "M4A4 | Buzz Kill Battle-Scarred", "M4A4 | Hellfire Factory New",
  "M4A4 | Hellfire Minimal Wear", "M4A4 | Hellfire Field-Tested",
  "M4A4 | Hellfire Well-Worn", "M4A4 | Hellfire Battle-Scarred",
  "M4A4 | Neo-Noir Factory New", "M4A4 | Neo-Noir Minimal Wear",
  "M4A4 | Neo-Noir Field-Tested", "M4A4 | Neo-Noir Well-Worn",
  "M4A4 | Neo-Noir Battle-Scarred", "M4A4 | Dark Blossom Factory New",
  "M4A4 | Dark Blossom Minimal Wear", "M4A4 | Dark Blossom Field-Tested",
  "M4A4 | Dark Blossom Well-Worn", "M4A4 | Dark Blossom Battle-Scarred",
  "M4A4 | Mainframe Factory New", "M4A4 | Mainframe Minimal Wear",
  "M4A4 | Mainframe Field-Tested", "M4A4 | Mainframe Well-Worn",
  "M4A4 | Mainframe Battle-Scarred", "M4A4 | Converter Factory New",
  "M4A4 | Converter Minimal Wear", "M4A4 | Converter Field-Tested",
  "M4A4 | Converter Well-Worn", "M4A4 | Magnesium Factory New",
  "M4A4 | Magnesium Minimal Wear", "M4A4 | Magnesium Field-Tested",
  "M4A4 | Magnesium Well-Worn", "M4A4 | Magnesium Battle-Scarred",
  "M4A4 | The Emperor Factory New", "M4A4 | The Emperor Minimal Wear",
  "M4A4 | The Emperor Field-Tested", "M4A4 | The Emperor Well-Worn",
  "M4A4 | The Emperor Battle-Scarred", "M4A4 | Red DDPAT Factory New",
  "M4A4 | Red DDPAT Minimal Wear", "M4A4 | Red DDPAT Field-Tested",
  "M4A4 | Red DDPAT Well-Worn", "M4A4 | Red DDPAT Battle-Scarred",
  "M4A4 | Tooth Fairy Factory New", "M4A4 | Tooth Fairy Minimal Wear",
  "M4A4 | Tooth Fairy Field-Tested", "M4A4 | Tooth Fairy Well-Worn",
  "M4A4 | Tooth Fairy Battle-Scarred", "M4A4 | Cyber Security Factory New",
  "M4A4 | Cyber Security Minimal Wear", "M4A4 | Cyber Security Field-Tested",
  "M4A4 | Cyber Security Well-Worn", "M4A4 | Cyber Security Battle-Scarred",
  "M4A4 | Global Offensive Factory New", "M4A4 | Global Offensive Minimal Wear",
  "M4A4 | Global Offensive Field-Tested", "M4A4 | Global Offensive Well-Worn",
  "M4A4 | Global Offensive Battle-Scarred",
  "M4A4 | In Living Color Factory New", "M4A4 | In Living Color Minimal Wear",
  "M4A4 | In Living Color Field-Tested", "M4A4 | In Living Color Well-Worn",
  "M4A4 | In Living Color Battle-Scarred", "M4A4 | The Coalition Factory New",
  "M4A4 | The Coalition Minimal Wear", "M4A4 | The Coalition Field-Tested",
  "M4A4 | The Coalition Well-Worn", "M4A4 | The Coalition Battle-Scarred",
  "M4A4 | Spider Lily Factory New", "M4A4 | Spider Lily Minimal Wear",
  "M4A4 | Spider Lily Field-Tested", "M4A4 | Spider Lily Well-Worn",
  "M4A4 | Spider Lily Battle-Scarred", "M4A4 | Poly Mag Factory New",
  "M4A4 | Poly Mag Minimal Wear", "M4A4 | Poly Mag Field-Tested",
  "M4A4 | Poly Mag Well-Worn", "M4A4 | Poly Mag Battle-Scarred",
  "M4A4 | Etch Lord Factory New", "M4A4 | Etch Lord Minimal Wear",
  "M4A4 | Etch Lord Field-Tested", "M4A4 | Etch Lord Well-Worn",
  "M4A4 | Etch Lord Battle-Scarred", "M4A4 | Temukau Factory New",
  "M4A4 | Temukau Minimal Wear", "M4A4 | Temukau Field-Tested",
  "M4A4 | Temukau Well-Worn", "M4A4 | Temukau Battle-Scarred",
  "M4A4 | Eye of Horus Factory New", "M4A4 | Eye of Horus Minimal Wear",
  "M4A4 | Eye of Horus Field-Tested", "M4A4 | Eye of Horus Well-Worn",
  "M4A4 | Eye of Horus Battle-Scarred", "MAC-10 | Candy Apple Factory New",
 "P90 | Virus Minimal Wear", "P90 | Virus Field-Tested",
  "P90 | Virus Well-Worn", "P90 | Virus Battle-Scarred",
  "P90 | Cold Blooded Factory New", "P90 | Cold Blooded Minimal Wear",
  "P90 | Storm Factory New", "P90 | Storm Minimal Wear",
  "P90 | Storm Field-Tested", "P90 | Storm Well-Worn",
  "P90 | Storm Battle-Scarred", "P90 | Glacier Mesh Factory New",
  "P90 | Glacier Mesh Minimal Wear", "P90 | Glacier Mesh Field-Tested",
  "P90 | Glacier Mesh Well-Worn", "P90 | Glacier Mesh Battle-Scarred",
  "P90 | Sand Spray Factory New", "P90 | Sand Spray Minimal Wear",
  "P90 | Sand Spray Field-Tested", "P90 | Sand Spray Well-Worn",
  "P90 | Sand Spray Battle-Scarred", "P90 | Death by Kitty Minimal Wear",
  "P90 | Death by Kitty Field-Tested", "P90 | Fallout Warning Factory New",
  "P90 | Fallout Warning Minimal Wear", "P90 | Fallout Warning Field-Tested",
  "P90 | Fallout Warning Well-Worn", "P90 | Fallout Warning Battle-Scarred",
  "P90 | Scorched Factory New", "P90 | Scorched Minimal Wear",
  "P90 | Scorched Field-Tested", "P90 | Scorched Well-Worn",
  "P90 | Scorched Battle-Scarred", "P90 | Emerald Dragon Factory New",
  "P90 | Emerald Dragon Minimal Wear", "P90 | Emerald Dragon Field-Tested",
  "P90 | Emerald Dragon Well-Worn", "P90 | Emerald Dragon Battle-Scarred",
  "P90 | Blind Spot Factory New", "P90 | Blind Spot Minimal Wear",
  "P90 | Blind Spot Field-Tested", "P90 | Blind Spot Well-Worn",
  "P90 | Blind Spot Battle-Scarred", "P90 | Ash Wood Factory New",
  "P90 | Ash Wood Minimal Wear", "P90 | Ash Wood Field-Tested",
  "P90 | Ash Wood Well-Worn", "P90 | Teardown Factory New",
  "P90 | Teardown Minimal Wear", "P90 | Teardown Field-Tested",
  "P90 | Teardown Well-Worn", "P90 | Teardown Battle-Scarred",
  "P90 | Trigon Minimal Wear", "P90 | Trigon Field-Tested",
  "P90 | Trigon Well-Worn", "P90 | Trigon Battle-Scarred",
  "P90 | Desert Warfare Factory New", "P90 | Desert Warfare Minimal Wear",
  "P90 | Desert Warfare Field-Tested", "P90 | Desert Warfare Well-Worn",
  "P90 | Desert Warfare Battle-Scarred", "P90 | Module Factory New",
  "P90 | Module Minimal Wear", "P90 | Module Field-Tested",
  "P90 | Leather Factory New", "P90 | Leather Minimal Wear",
  "P90 | Leather Field-Tested", "P90 | Leather Well-Worn",
  "P90 | Leather Battle-Scarred", "P90 | Asiimov Factory New",
  "P90 | Asiimov Minimal Wear", "P90 | Asiimov Field-Tested",
  "P90 | Asiimov Well-Worn", "P90 | Asiimov Battle-Scarred",
  "P90 | Elite Build Factory New", "P90 | Elite Build Minimal Wear",
  "P90 | Elite Build Field-Tested", "P90 | Elite Build Well-Worn",
  "P90 | Elite Build Battle-Scarred", "P90 | Shapewood Factory New",
  "P90 | Shapewood Minimal Wear", "P90 | Shapewood Field-Tested",
  "P90 | Shapewood Well-Worn", "P90 | Shapewood Battle-Scarred",
  "P90 | Chopper Factory New", "P90 | Chopper Minimal Wear",
  "P90 | Chopper Field-Tested", "P90 | Chopper Well-Worn",
  "P90 | Chopper Battle-Scarred", "P90 | Grim Factory New",
  "P90 | Grim Minimal Wear", "P90 | Grim Field-Tested",
  "P90 | Grim Well-Worn", "P90 | Grim Battle-Scarred",
  "P90 | Shallow Grave Factory New", "P90 | Shallow Grave Minimal Wear",
  "P90 | Shallow Grave Field-Tested", "P90 | Shallow Grave Well-Worn",
  "P90 | Shallow Grave Battle-Scarred", "P90 | Death Grip Factory New",
  "P90 | Death Grip Minimal Wear", "P90 | Death Grip Field-Tested",
  "P90 | Death Grip Well-Worn", "P90 | Death Grip Battle-Scarred",
  "P90 | Traction Factory New", "P90 | Traction Minimal Wear",
  "P90 | Traction Field-Tested", "P90 | Traction Well-Worn",
  "P90 | Traction Battle-Scarred", "P90 | Sunset Lily Factory New",
  "P90 | Sunset Lily Minimal Wear", "P90 | Sunset Lily Field-Tested",
  "P90 | Sunset Lily Well-Worn", "P90 | Sunset Lily Battle-Scarred",
  "P90 | Baroque Red Factory New", "P90 | Baroque Red Minimal Wear",
  "P90 | Baroque Red Field-Tested", "P90 | Baroque Red Well-Worn",
  "P90 | Baroque Red Battle-Scarred", "P90 | Astral Jörmungandr Factory New",
  "P90 | Astral Jörmungandr Minimal Wear", "P90 | Astral Jörmungandr Field-Tested",
  "P90 | Astral Jörmungandr Well-Worn", "P90 | Astral Jörmungandr Battle-Scarred",
  "P90 | Facility Negative Factory New", "P90 | Facility Negative Minimal Wear",
  "P90 | Facility Negative Field-Tested", "P90 | Facility Negative Well-Worn",
  "P90 | Facility Negative Battle-Scarred",
  "P90 | Verdant Growth Factory New", "P90 | Verdant Growth Minimal Wear",
  "P90 | Verdant Growth Field-Tested", "P90 | Verdant Growth Well-Worn",
  "P90 | Verdant Growth Battle-Scarred", "P90 | Off World Factory New",
  "P90 | Off World Minimal Wear", "P90 | Off World Field-Tested",
  "P90 | Off World Well-Worn", "P90 | Off World Battle-Scarred",
  "P90 | Nostalgia Factory New", "P90 | Nostalgia Minimal Wear",
  "P90 | Nostalgia Field-Tested", "P90 | Nostalgia Well-Worn",
  "P90 | Nostalgia Battle-Scarred", "P90 | Desert DDPAT Factory New",
  "P90 | Desert DDPAT Minimal Wear", "P90 | Desert DDPAT Field-Tested",
  "P90 | Desert DDPAT Well-Worn", "P90 | Desert DDPAT Battle-Scarred",
  "P90 | Freight Factory New", "P90 | Freight Minimal Wear",
  "P90 | Freight Field-Tested", "P90 | Freight Well-Worn",
  "P90 | Freight Battle-Scarred", "P90 | Cocoa Rampage Factory New",
  "P90 | Cocoa Rampage Minimal Wear", "P90 | Cocoa Rampage Field-Tested",
  "P90 | Cocoa Rampage Well-Worn", "P90 | Cocoa Rampage Battle-Scarred",
  "P90 | Run and Hide Factory New", "P90 | Run and Hide Minimal Wear",
  "P90 | Run and Hide Field-Tested", "P90 | Run and Hide Well-Worn",
  "P90 | Run and Hide Battle-Scarred", "P90 | Tiger Pit Factory New",
  "P90 | Tiger Pit Minimal Wear", "P90 | Tiger Pit Field-Tested",
  "P90 | Tiger Pit Well-Worn", "P90 | Tiger Pit Battle-Scarred",
  "P90 | Ancient Earth Factory New", "P90 | Ancient Earth Minimal Wear",
  "P90 | Ancient Earth Field-Tested", "P90 | Ancient Earth Well-Worn",
  "P90 | Ancient Earth Battle-Scarred", "P90 | Schematic Factory New",
  "P90 | Schematic Minimal Wear", "P90 | Schematic Field-Tested",
  "P90 | Schematic Well-Worn", "P90 | Schematic Battle-Scarred",
  "P90 | Vent Rush Factory New", "P90 | Vent Rush Minimal Wear",
  "P90 | Vent Rush Field-Tested", "P90 | Vent Rush Well-Worn",
  "P90 | Vent Rush Battle-Scarred", "P90 | Neoqueen Factory New",
  "P90 | Neoqueen Minimal Wear", "P90 | Neoqueen Field-Tested",
  "P90 | Neoqueen Well-Worn", "P90 | Neoqueen Battle-Scarred",
  "P90 | ScaraB Rush Factory New", "P90 | ScaraB Rush Minimal Wear",
  "P90 | ScaraB Rush Field-Tested", "P90 | ScaraB Rush Well-Worn",
  "P90 | ScaraB Rush Battle-Scarred", "MP5-SD | Dirt Drop Factory New",
 "Negev | Anodized Navy Minimal Wear", "Negev | Palm Factory New",
  "Negev | Palm Minimal Wear", "Negev | Palm Field-Tested",
  "Negev | Palm Well-Worn", "Negev | Palm Battle-Scarred",
  "Negev | CaliCamo Factory New", "Negev | CaliCamo Minimal Wear",
  "Negev | CaliCamo Field-Tested", "Negev | CaliCamo Well-Worn",
  "Negev | CaliCamo Battle-Scarred", "Negev | Terrain Factory New",
  "Negev | Terrain Minimal Wear", "Negev | Terrain Field-Tested",
  "Negev | Terrain Well-Worn", "Negev | Army Sheen Factory New",
  "Negev | Army Sheen Minimal Wear", "Negev | Army Sheen Field-Tested",
  "Negev | Bratatat Factory New", "Negev | Bratatat Minimal Wear",
  "Negev | Bratatat Field-Tested", "Negev | Bratatat Well-Worn",
  "Negev | Bratatat Battle-Scarred", "Negev | Desert-Strike Factory New",
  "Negev | Desert-Strike Minimal Wear", "Negev | Desert-Strike Field-Tested",
  "Negev | Desert-Strike Well-Worn", "Negev | Desert-Strike Battle-Scarred",
  "Negev | Nuclear Waste Factory New", "Negev | Nuclear Waste Minimal Wear",
  "Negev | Nuclear Waste Field-Tested", "Negev | Nuclear Waste Well-Worn",
  "Negev | Man-o'-war Minimal Wear", "Negev | Man-o'-war Field-Tested",
  "Negev | Loudmouth Minimal Wear", "Negev | Loudmouth Field-Tested",
  "Negev | Loudmouth Well-Worn", "Negev | Loudmouth Battle-Scarred",
  "Negev | Power Loader Factory New", "Negev | Power Loader Minimal Wear",
  "Negev | Power Loader Field-Tested", "Negev | Power Loader Well-Worn",
  "Negev | Power Loader Battle-Scarred", "Negev | Dazzle Minimal Wear",
  "Negev | Dazzle Field-Tested", "Negev | Dazzle Well-Worn",
  "Negev | Dazzle Battle-Scarred", "Negev | Lionfish Factory New",
  "Negev | Lionfish Minimal Wear", "Negev | Lionfish Field-Tested",
  "Negev | Lionfish Well-Worn", "Negev | Lionfish Battle-Scarred",
  "Negev | Mjölnir Factory New", "Negev | Mjölnir Minimal Wear",
  "Negev | Mjölnir Field-Tested", "Negev | Mjölnir Well-Worn",
  "Negev | Mjölnir Battle-Scarred", "Negev | Bulkhead Factory New",
  "Negev | Bulkhead Minimal Wear", "Negev | Bulkhead Field-Tested",
  "Negev | Bulkhead Well-Worn", "Negev | Bulkhead Battle-Scarred",
  "Negev | Boroque Sand Factory New", "Negev | Boroque Sand Minimal Wear",
  "Negev | Boroque Sand Field-Tested", "Negev | Boroque Sand Well-Worn",
  "Negev | Boroque Sand Battle-Scarred", "Negev | Prototype Factory New",
  "Negev | Prototype Minimal Wear", "Negev | Prototype Field-Tested",
  "Negev | Prototype Well-Worn", "Negev | Prototype Battle-Scarred",
  "Negev | Ultralight Factory New", "Negev | Ultralight Minimal Wear",
  "Negev | Ultralight Field-Tested", "Negev | Ultralight Well-Worn",
  "Negev | Ultralight Battle-Scarred", "Negev | Phoenix Stencil Factory New",
  "Negev | Phoenix Stencil Minimal Wear", "Negev | Phoenix Stencil Field-Tested",
  "Negev | Phoenix Stencil Well-Worn", "Negev | Phoenix Stencil Battle-Scarred",
  "Negev | dev_texture Factory New", "Negev | dev_texture Minimal Wear",
  "Negev | dev_texture Field-Tested", "Negev | dev_texture Well-Worn",
  "Negev | dev_texture Battle-Scarred", "Negev | Infrastructure Factory New",
  "Negev | Infrastructure Minimal Wear", "Negev | Infrastructure Field-Tested",
  "Negev | Infrastructure Well-Worn", "Negev | Infrastructure Battle-Scarred",
  "Negev | Drop Me Factory New", "Negev | Drop Me Minimal Wear",
  "Negev | Drop Me Field-Tested", "Negev | Drop Me Well-Worn",
  "Negev | Drop Me Battle-Scarred", "Sawed-Off | Forest DDPAT Factory New",
 "MP7 | Forest DDPAT Minimal Wear", "MP7 | Forest DDPAT Field-Tested",
  "MP7 | Forest DDPAT Well-Worn", "MP7 | Forest DDPAT Battle-Scarred",
  "MP7 | Skulls Minimal Wear", "MP7 | Skulls Field-Tested",
  "MP7 | Gunsmoke Factory New", "MP7 | Gunsmoke Minimal Wear",
  "MP7 | Gunsmoke Field-Tested", "MP7 | Gunsmoke Well-Worn",
  "MP7 | Gunsmoke Battle-Scarred", "MP7 | Anodized Navy Factory New",
  "MP7 | Anodized Navy Minimal Wear", "MP7 | Whiteout Factory New",
  "MP7 | Whiteout Minimal Wear", "MP7 | Whiteout Field-Tested",
  "MP7 | Whiteout Well-Worn", "MP7 | Whiteout Battle-Scarred",
  "MP7 | Orange Peel Factory New", "MP7 | Orange Peel Minimal Wear",
  "MP7 | Orange Peel Field-Tested", "MP7 | Orange Peel Well-Worn",
  "MP7 | Orange Peel Battle-Scarred", "MP7 | Scorched Factory New",
  "MP7 | Scorched Minimal Wear", "MP7 | Scorched Field-Tested",
  "MP7 | Scorched Well-Worn", "MP7 | Scorched Battle-Scarred",
  "MP7 | Groundwater Factory New", "MP7 | Groundwater Minimal Wear",
  "MP7 | Groundwater Field-Tested", "MP7 | Groundwater Well-Worn",
  "MP7 | Groundwater Battle-Scarred", "MP7 | Ocean Foam Factory New",
  "MP7 | Ocean Foam Minimal Wear", "MP7 | Army Recon Factory New",
  "MP7 | Army Recon Minimal Wear", "MP7 | Army Recon Field-Tested",
  "MP7 | Army Recon Well-Worn", "MP7 | Army Recon Battle-Scarred",
  "MP7 | Full Stop Factory New", "MP7 | Full Stop Minimal Wear",
  "MP7 | Full Stop Field-Tested", "MP7 | Full Stop Well-Worn",
  "MP7 | Full Stop Battle-Scarred", "MP7 | Urban Hazard Factory New",
  "MP7 | Urban Hazard Minimal Wear", "MP7 | Urban Hazard Field-Tested",
  "MP7 | Urban Hazard Well-Worn", "MP7 | Urban Hazard Battle-Scarred",
  "MP7 | Olive Plaid Factory New", "MP7 | Olive Plaid Minimal Wear",
  "MP7 | Olive Plaid Field-Tested", "MP7 | Olive Plaid Well-Worn",
  "MP7 | Olive Plaid Battle-Scarred", "MP7 | Armor Core Factory New",
  "MP7 | Armor Core Minimal Wear", "MP7 | Armor Core Field-Tested",
  "MP7 | Armor Core Well-Worn", "MP7 | Armor Core Battle-Scarred",
  "MP7 | Asterion Factory New", "MP7 | Asterion Minimal Wear",
  "MP7 | Asterion Field-Tested", "MP7 | Asterion Well-Worn",
  "MP7 | Asterion Battle-Scarred", "MP7 | Nemesis Factory New",
  "MP7 | Nemesis Minimal Wear", "MP7 | Nemesis Field-Tested",
  "MP7 | Special Delivery Factory New", "MP7 | Special Delivery Minimal Wear",
  "MP7 | Special Delivery Field-Tested", "MP7 | Special Delivery Well-Worn",
  "MP7 | Special Delivery Battle-Scarred", "MP7 | Impire Factory New",
  "MP7 | Impire Minimal Wear", "MP7 | Impire Field-Tested",
  "MP7 | Impire Well-Worn", "MP7 | Cirrus Factory New",
  "MP7 | Cirrus Minimal Wear", "MP7 | Cirrus Field-Tested",
  "MP7 | Cirrus Well-Worn", "MP7 | Cirrus Battle-Scarred",
  "MP7 | Akoben Factory New", "MP7 | Akoben Minimal Wear",
  "MP7 | Akoben Field-Tested", "MP7 | Akoben Well-Worn",
  "MP7 | Akoben Battle-Scarred", "MP7 | Bloodsport Factory New",
  "MP7 | Bloodsport Minimal Wear", "MP7 | Bloodsport Field-Tested",
  "MP7 | Bloodsport Well-Worn", "MP7 | Bloodsport Battle-Scarred",
  "MP7 | Powercore Factory New", "MP7 | Powercore Minimal Wear",
  "MP7 | Powercore Field-Tested", "MP7 | Powercore Well-Worn",
  "MP7 | Powercore Battle-Scarred", "MP7 | Teal Blossom Factory New",
  "MP7 | Teal Blossom Minimal Wear", "MP7 | Teal Blossom Field-Tested",
  "MP7 | Teal Blossom Well-Worn", "MP7 | Teal Blossom Battle-Scarred",
  "MP7 | Fade Factory New", "MP7 | Fade Minimal Wear",
  "MP7 | Fade Field-Tested", "MP7 | Motherboard Factory New",
  "MP7 | Motherboard Minimal Wear", "MP7 | Motherboard Field-Tested",
  "MP7 | Motherboard Well-Worn", "MP7 | Motherboard Battle-Scarred",
  "MP7 | Mischief Minimal Wear", "MP7 | Mischief Field-Tested",
  "MP7 | Mischief Well-Worn", "MP7 | Mischief Battle-Scarred",
  "MP7 | Neon Ply Factory New", "MP7 | Neon Ply Minimal Wear",
  "MP7 | Neon Ply Field-Tested", "MP7 | Neon Ply Well-Worn",
  "MP7 | Neon Ply Battle-Scarred", "MP7 | Prey Factory New",
  "MP7 | Prey Minimal Wear", "MP7 | Prey Field-Tested",
  "MP7 | Prey Well-Worn", "MP7 | Prey Battle-Scarred",
  "MP7 | Vault Heist Factory New", "MP7 | Vault Heist Minimal Wear",
  "MP7 | Vault Heist Field-Tested", "MP7 | Vault Heist Well-Worn",
  "MP7 | Vault Heist Battle-Scarred", "MP7 | Tall Grass Factory New",
  "MP7 | Tall Grass Minimal Wear", "MP7 | Tall Grass Field-Tested",
  "MP7 | Tall Grass Well-Worn", "MP7 | Tall Grass Battle-Scarred",
  "MP7 | Guerrilla Factory New", "MP7 | Guerrilla Minimal Wear",
  "MP7 | Guerrilla Field-Tested", "MP7 | Guerrilla Well-Worn",
  "MP7 | Guerrilla Battle-Scarred", "MP7 | Abyssal Apparition Factory New",
  "MP7 | Abyssal Apparition Minimal Wear", "MP7 | Abyssal Apparition Field-Tested",
  "MP7 | Abyssal Apparition Well-Worn", "MP7 | Abyssal Apparition Battle-Scarred",
  "MP7 | Just Smile Factory New", "MP7 | Just Smile Minimal Wear",
  "MP7 | Just Smile Field-Tested", "MP7 | Just Smile Well-Worn",
  "MP7 | Just Smile Battle-Scarred", "MP7 | Sunbaked Factory New",
  "MP7 | Sunbaked Minimal Wear", "MP7 | Sunbaked Field-Tested",
  "MP7 | Sunbaked Well-Worn", "MP7 | Sunbaked Battle-Scarred",
  "MP9 | Hot Rod Factory New", "MP9 | Hot Rod Minimal Wear",
  "MP9 | Bulldozer Factory New", "MP9 | Bulldozer Minimal Wear",
  "MP9 | Bulldozer Field-Tested", "MP9 | Bulldozer Well-Worn",
  "MP9 | Bulldozer Battle-Scarred", "MP9 | Hypnotic Factory New",
  "MP9 | Hypnotic Minimal Wear", "MP9 | Storm Factory New",
  "MP9 | Storm Minimal Wear", "MP9 | Storm Field-Tested",
  "MP9 | Storm Well-Worn", "MP9 | Storm Battle-Scarred",
  "MP9 | Orange Peel Factory New", "MP9 | Orange Peel Minimal Wear",
  "MP9 | Orange Peel Field-Tested", "MP9 | Orange Peel Well-Worn",
  "MP9 | Orange Peel Battle-Scarred", "MP9 | Sand Dashed Factory New",
  "MP9 | Sand Dashed Minimal Wear", "MP9 | Sand Dashed Field-Tested",
  "MP9 | Sand Dashed Well-Worn", "MP9 | Sand Dashed Battle-Scarred",
  "MP9 | Dry Season Factory New", "MP9 | Dry Season Minimal Wear",
  "MP9 | Dry Season Field-Tested", "MP9 | Dry Season Well-Worn",
  "MP9 | Dry Season Battle-Scarred", "MP9 | Rose Iron Factory New",
  "MP9 | Rose Iron Minimal Wear", "MP9 | Rose Iron Field-Tested",
  "MP9 | Army Sheen Factory New", "MP9 | Army Sheen Minimal Wear",
  "MP9 | Army Sheen Field-Tested", "MP9 | Dark Age Factory New",
  "MP9 | Dark Age Minimal Wear", "MP9 | Dark Age Field-Tested",
  "MP9 | Green Plaid Factory New", "MP9 | Green Plaid Minimal Wear",
  "MP9 | Green Plaid Field-Tested", "MP9 | Green Plaid Well-Worn",
  "MP9 | Green Plaid Battle-Scarred", "MP9 | Setting Sun Factory New",
  "MP9 | Setting Sun Minimal Wear", "MP9 | Setting Sun Field-Tested",
  "MP9 | Setting Sun Well-Worn", "MP9 | Setting Sun Battle-Scarred",
  "MP9 | Dart Factory New", "MP9 | Dart Minimal Wear",
  "MP9 | Dart Field-Tested", "MP9 | Dart Well-Worn",
  "MP9 | Dart Battle-Scarred", "MP9 | Deadly Poison Factory New",
  "MP9 | Deadly Poison Minimal Wear", "MP9 | Deadly Poison Field-Tested",
  "MP9 | Deadly Poison Well-Worn", "MP9 | Deadly Poison Battle-Scarred",
  "MP9 | Pandora's Box Factory New", "MP9 | Pandora's Box Minimal Wear",
  "MP9 | Pandora's Box Field-Tested", "MP9 | Ruby Poison Dart Factory New",
  "MP9 | Ruby Poison Dart Minimal Wear", "MP9 | Ruby Poison Dart Field-Tested",
  "MP9 | Ruby Poison Dart Well-Worn", "MP9 | Ruby Poison Dart Battle-Scarred",
  "MP9 | Bioleak Factory New", "MP9 | Bioleak Minimal Wear",
  "MP9 | Bioleak Field-Tested", "MP9 | Bioleak Well-Worn",
  "MP9 | Bioleak Battle-Scarred", "MP9 | Airlock Factory New",
  "MP9 | Airlock Minimal Wear", "MP9 | Airlock Field-Tested",
  "MP9 | Airlock Well-Worn", "MP9 | Airlock Battle-Scarred",
  "MP9 | Sand Scale Factory New", "MP9 | Sand Scale Minimal Wear",
  "MP9 | Sand Scale Field-Tested", "MP9 | Sand Scale Well-Worn",
  "MP9 | Goo Factory New", "MP9 | Goo Minimal Wear",
  "MP9 | Goo Field-Tested", "MP9 | Goo Well-Worn",
  "MP9 | Goo Battle-Scarred", "MP9 | Black Sand Factory New",
  "MP9 | Black Sand Minimal Wear", "MP9 | Black Sand Field-Tested",
  "MP9 | Black Sand Well-Worn", "MP9 | Black Sand Battle-Scarred",
  "MP9 | Capillary Factory New", "MP9 | Capillary Minimal Wear",
  "MP9 | Capillary Field-Tested", "MP9 | Capillary Well-Worn",
  "MP9 | Capillary Battle-Scarred", "MP9 | Wild Lily Factory New",
  "MP9 | Wild Lily Minimal Wear", "MP9 | Wild Lily Field-Tested",
  "MP9 | Wild Lily Well-Worn", "MP9 | Wild Lily Battle-Scarred",
  "MP9 | Slide Factory New", "MP9 | Slide Minimal Wear",
  "MP9 | Slide Field-Tested", "MP9 | Slide Well-Worn",
  "MP9 | Slide Battle-Scarred", "MP9 | Modest Threat Factory New",
  "MP9 | Modest Threat Minimal Wear", "MP9 | Modest Threat Field-Tested",
  "MP9 | Modest Threat Well-Worn", "MP9 | Modest Threat Battle-Scarred",
  "MP9 | Music Box Factory New", "MP9 | Music Box Minimal Wear",
  "MP9 | Music Box Field-Tested", "MP9 | Music Box Well-Worn",
  "MP9 | Music Box Battle-Scarred", "MP9 | Stained Glass Factory New",
  "MP9 | Stained Glass Minimal Wear", "MP9 | Stained Glass Field-Tested",
  "MP9 | Stained Glass Well-Worn", "MP9 | Stained Glass Battle-Scarred",
  "MP9 | Hydra Factory New", "MP9 | Hydra Minimal Wear",
  "MP9 | Hydra Field-Tested", "MP9 | Hydra Well-Worn",
  "MP9 | Hydra Battle-Scarred", "MP9 | Old Roots Factory New",
  "MP9 | Old Roots Minimal Wear", "MP9 | Old Roots Field-Tested",
  "MP9 | Old Roots Well-Worn", "MP9 | Old Roots Battle-Scarred",
  "MP9 | Food Chain Factory New", "MP9 | Food Chain Minimal Wear",
  "MP9 | Food Chain Field-Tested", "MP9 | Food Chain Well-Worn",
  "MP9 | Food Chain Battle-Scarred", "MP9 | Mount Fuji Factory New",
  "MP9 | Mount Fuji Minimal Wear", "MP9 | Mount Fuji Field-Tested",
  "MP9 | Mount Fuji Well-Worn", "MP9 | Mount Fuji Battle-Scarred",
  "MP9 | Starlight Protector Factory New", "MP9 | Starlight Protector Minimal Wear",
  "MP9 | Starlight Protector Field-Tested",
  "MP9 | Starlight Protector Well-Worn", "MP9 | Starlight Protector Battle-Scarred",
  "MP9 | Featherweight Factory New", "MP9 | Featherweight Minimal Wear",
  "MP9 | Featherweight Field-Tested", "MP9 | Featherweight Well-Worn",
  "MP9 | Featherweight Battle-Scarred", "Nova | Candy Apple Factory New",
 "SSG 08 | Lichen Dashed Factory New", "SSG 08 | Lichen Dashed Minimal Wear",
  "SSG 08 | Lichen Dashed Field-Tested", "SSG 08 | Lichen Dashed Well-Worn",
  "SSG 08 | Lichen Dashed Battle-Scarred", "SSG 08 | Dark Water Minimal Wear",
  "SSG 08 | Dark Water Field-Tested", "SSG 08 | Carbon Fiber Factory New",
  "SSG 08 | Carbon Fiber Minimal Wear", "SSG 08 | Blue Spruce Factory New",
  "SSG 08 | Blue Spruce Minimal Wear", "SSG 08 | Blue Spruce Field-Tested",
  "SSG 08 | Blue Spruce Well-Worn", "SSG 08 | Blue Spruce Battle-Scarred",
  "SSG 08 | Sand Dune Factory New", "SSG 08 | Sand Dune Minimal Wear",
  "SSG 08 | Sand Dune Field-Tested", "SSG 08 | Sand Dune Well-Worn",
  "SSG 08 | Sand Dune Battle-Scarred", "SSG 08 | Jungle Dashed Factory New",
  "SSG 08 | Jungle Dashed Minimal Wear", "SSG 08 | Jungle Dashed Field-Tested",
  "SSG 08 | Jungle Dashed Well-Worn", "SSG 08 | Jungle Dashed Battle-Scarred",
  "SSG 08 | Mayan Dreams Factory New", "SSG 08 | Mayan Dreams Minimal Wear",
  "SSG 08 | Mayan Dreams Field-Tested", "SSG 08 | Mayan Dreams Well-Worn",
  "SSG 08 | Mayan Dreams Battle-Scarred", "SSG 08 | Blood in the Water Factory New",
  "SSG 08 | Blood in the Water Minimal Wear",
  "SSG 08 | Blood in the Water Field-Tested",
  "SSG 08 | Tropical Storm Factory New", "SSG 08 | Tropical Storm Minimal Wear",
  "SSG 08 | Tropical Storm Field-Tested", "SSG 08 | Tropical Storm Well-Worn",
  "SSG 08 | Tropical Storm Battle-Scarred",
  "SSG 08 | Acid Fade Factory New", "SSG 08 | Slashed Minimal Wear",
  "SSG 08 | Slashed Field-Tested", "SSG 08 | Slashed Well-Worn",
  "SSG 08 | Slashed Battle-Scarred", "SSG 08 | Detour Factory New",
  "SSG 08 | Detour Minimal Wear", "SSG 08 | Detour Field-Tested",
  "SSG 08 | Detour Well-Worn", "SSG 08 | Abyss Factory New",
  "SSG 08 | Abyss Minimal Wear", "SSG 08 | Abyss Field-Tested",
  "SSG 08 | Abyss Well-Worn", "SSG 08 | Abyss Battle-Scarred",
  "SSG 08 | Big Iron Factory New", "SSG 08 | Big Iron Minimal Wear",
  "SSG 08 | Big Iron Field-Tested", "SSG 08 | Big Iron Well-Worn",
  "SSG 08 | Big Iron Battle-Scarred", "SSG 08 | Necropos Factory New",
  "SSG 08 | Necropos Minimal Wear", "SSG 08 | Necropos Field-Tested",
  "SSG 08 | Necropos Well-Worn", "SSG 08 | Necropos Battle-Scarred",
  "SSG 08 | Ghost Crusader Factory New", "SSG 08 | Ghost Crusader Minimal Wear",
  "SSG 08 | Ghost Crusader Field-Tested", "SSG 08 | Ghost Crusader Well-Worn",
  "SSG 08 | Ghost Crusader Battle-Scarred",
  "SSG 08 | Dragonfire Factory New", "SSG 08 | Dragonfire Minimal Wear",
  "SSG 08 | Dragonfire Field-Tested", "SSG 08 | Dragonfire Well-Worn",
  "SSG 08 | Dragonfire Battle-Scarred", "SSG 08 | Death's Head Factory New",
  "SSG 08 | Death's Head Minimal Wear", "SSG 08 | Death's Head Field-Tested",
  "SSG 08 | Death's Head Well-Worn", "SSG 08 | Death's Head Battle-Scarred",
  "SSG 08 | Orange Filigree Factory New", "SSG 08 | Orange Filigree Minimal Wear",
  "SSG 08 | Orange Filigree Field-Tested", "SSG 08 | Orange Filigree Well-Worn",
  "SSG 08 | Orange Filigree Battle-Scarred",
  "SSG 08 | Hand Brake Factory New", "SSG 08 | Hand Brake Minimal Wear",
  "SSG 08 | Hand Brake Field-Tested", "SSG 08 | Hand Brake Well-Worn",
  "SSG 08 | Hand Brake Battle-Scarred", "SSG 08 | Red Stone Factory New",
  "SSG 08 | Red Stone Minimal Wear", "SSG 08 | Red Stone Field-Tested",
  "SSG 08 | Red Stone Well-Worn", "SSG 08 | Red Stone Battle-Scarred",
  "SSG 08 | Sea Calico Factory New", "SSG 08 | Sea Calico Minimal Wear",
  "SSG 08 | Sea Calico Field-Tested", "SSG 08 | Sea Calico Well-Worn",
  "SSG 08 | Sea Calico Battle-Scarred", "SSG 08 | Bloodshot Minimal Wear",
  "SSG 08 | Bloodshot Field-Tested", "SSG 08 | Bloodshot Well-Worn",
  "SSG 08 | Bloodshot Battle-Scarred", "SSG 08 | Prey Factory New",
  "SSG 08 | Prey Minimal Wear", "SSG 08 | Prey Field-Tested",
  "SSG 08 | Prey Well-Worn", "SSG 08 | Prey Battle-Scarred",
  "SSG 08 | Fever Dream Factory New", "SSG 08 | Fever Dream Minimal Wear",
  "SSG 08 | Fever Dream Field-Tested", "SSG 08 | Fever Dream Well-Worn",
  "SSG 08 | Fever Dream Battle-Scarred", "SSG 08 | Mainframe 001 Factory New",
  "SSG 08 | Mainframe 001 Minimal Wear", "SSG 08 | Mainframe 001 Field-Tested",
  "SSG 08 | Mainframe 001 Well-Worn", "SSG 08 | Mainframe 001 Battle-Scarred",
  "SSG 08 | Parallax Factory New", "SSG 08 | Parallax Minimal Wear",
  "SSG 08 | Parallax Field-Tested", "SSG 08 | Parallax Well-Worn",
  "SSG 08 | Parallax Battle-Scarred", "SSG 08 | Threat Detected Factory New",
  "SSG 08 | Threat Detected Minimal Wear", "SSG 08 | Threat Detected Field-Tested",
  "SSG 08 | Threat Detected Well-Worn", "SSG 08 | Threat Detected Battle-Scarred",
  "SSG 08 | Death Strike Factory New", "SSG 08 | Death Strike Minimal Wear",
  "SSG 08 | Death Strike Field-Tested", "SSG 08 | Death Strike Well-Worn",
  "SSG 08 | Death Strike Battle-Scarred", "SSG 08 | Spring Twilly Factory New",
  "SSG 08 | Spring Twilly Minimal Wear", "SSG 08 | Spring Twilly Field-Tested",
  "SSG 08 | Spring Twilly Well-Worn", "SSG 08 | Spring Twilly Battle-Scarred",
  "SSG 08 | Turbo Peek Factory New", "SSG 08 | Turbo Peek Minimal Wear",
  "SSG 08 | Turbo Peek Field-Tested", "SSG 08 | Turbo Peek Well-Worn",
  "SSG 08 | Turbo Peek Battle-Scarred", "SSG 08 | Dezastre Factory New",
  "SSG 08 | Dezastre Minimal Wear", "SSG 08 | Dezastre Field-Tested",
  "SSG 08 | Dezastre Well-Worn", "SSG 08 | Dezastre Battle-Scarred",
  "SSG 08 | Azure Glyph Factory New", "SSG 08 | Azure Glyph Minimal Wear",
  "SSG 08 | Azure Glyph Field-Tested", "SSG 08 | Azure Glyph Well-Worn",
  "SSG 08 | Azure Glyph Battle-Scarred", "M4A1-S | Dark Water Minimal Wear",
  "M4A1-S | Dark Water Field-Tested", "M4A1-S | Boreal Forest Factory New",
  "M4A1-S | Boreal Forest Minimal Wear", "M4A1-S | Boreal Forest Field-Tested",
  "M4A1-S | Boreal Forest Well-Worn", "M4A1-S | Boreal Forest Battle-Scarred",
  "M4A1-S | Bright Water Minimal Wear", "M4A1-S | Bright Water Field-Tested",
  "M4A1-S | Blood Tiger Factory New", "M4A1-S | Blood Tiger Minimal Wear",
  "M4A1-S | Blood Tiger Field-Tested", "M4A1-S | VariCamo Factory New",
  "M4A1-S | VariCamo Minimal Wear", "M4A1-S | VariCamo Field-Tested",
  "M4A1-S | VariCamo Well-Worn", "M4A1-S | VariCamo Battle-Scarred",
  "M4A1-S | Nitro Factory New", "M4A1-S | Nitro Minimal Wear",
  "M4A1-S | Nitro Field-Tested", "M4A1-S | Nitro Well-Worn",
  "M4A1-S | Nitro Battle-Scarred", "M4A1-S | Guardian Factory New",
  "M4A1-S | Guardian Minimal Wear", "M4A1-S | Guardian Field-Tested",
  "M4A1-S | Guardian Well-Worn", "M4A1-S | Guardian Battle-Scarred",
  "M4A1-S | Atomic Alloy Factory New", "M4A1-S | Atomic Alloy Minimal Wear",
  "M4A1-S | Atomic Alloy Field-Tested", "M4A1-S | Atomic Alloy Well-Worn",
  "M4A1-S | Atomic Alloy Battle-Scarred", "M4A1-S | Master Piece Factory New",
  "M4A1-S | Master Piece Minimal Wear", "M4A1-S | Master Piece Field-Tested",
  "M4A1-S | Master Piece Well-Worn", "M4A1-S | Master Piece Battle-Scarred",
  "M4A1-S | Knight Factory New", "M4A1-S | Knight Minimal Wear",
  "M4A1-S | Cyrex Factory New", "M4A1-S | Cyrex Minimal Wear",
  "M4A1-S | Cyrex Field-Tested", "M4A1-S | Cyrex Well-Worn",
  "M4A1-S | Cyrex Battle-Scarred", "M4A1-S | Basilisk Factory New",
  "M4A1-S | Basilisk Minimal Wear", "M4A1-S | Basilisk Field-Tested",
  "M4A1-S | Basilisk Well-Worn", "M4A1-S | Basilisk Battle-Scarred",
  "M4A1-S | Hyper Beast Factory New", "M4A1-S | Hyper Beast Minimal Wear",
  "M4A1-S | Hyper Beast Field-Tested", "M4A1-S | Hyper Beast Well-Worn",
  "M4A1-S | Hyper Beast Battle-Scarred", "M4A1-S | Icarus Fell Factory New",
  "M4A1-S | Icarus Fell Minimal Wear", "M4A1-S | Hot Rod Factory New",
  "M4A1-S | Hot Rod Minimal Wear", "M4A1-S | Golden Coil Factory New",
  "M4A1-S | Golden Coil Minimal Wear", "M4A1-S | Golden Coil Field-Tested",
  "M4A1-S | Golden Coil Well-Worn", "M4A1-S | Golden Coil Battle-Scarred",
  "M4A1-S | Chantico's Fire Factory New", "M4A1-S | Chantico's Fire Minimal Wear",
  "M4A1-S | Chantico's Fire Field-Tested", "M4A1-S | Chantico's Fire Well-Worn",
  "M4A1-S | Chantico's Fire Battle-Scarred",
  "M4A1-S | Mecha Industries Factory New", "M4A1-S | Mecha Industries Minimal Wear",
  "M4A1-S | Mecha Industries Field-Tested",
  "M4A1-S | Mecha Industries Well-Worn", "M4A1-S | Mecha Industries Battle-Scarred",
  "M4A1-S | Flashback Factory New", "M4A1-S | Flashback Minimal Wear",
  "M4A1-S | Flashback Field-Tested", "M4A1-S | Flashback Well-Worn",
  "M4A1-S | Flashback Battle-Scarred", "M4A1-S | Decimator Factory New",
  "M4A1-S | Decimator Minimal Wear", "M4A1-S | Decimator Field-Tested",
  "M4A1-S | Decimator Well-Worn", "M4A1-S | Decimator Battle-Scarred",
  "M4A1-S | Briefing Factory New", "M4A1-S | Briefing Minimal Wear",
  "M4A1-S | Briefing Field-Tested", "M4A1-S | Briefing Well-Worn",
  "M4A1-S | Briefing Battle-Scarred", "M4A1-S | Leaded Glass Factory New",
  "M4A1-S | Leaded Glass Minimal Wear", "M4A1-S | Leaded Glass Field-Tested",
  "M4A1-S | Leaded Glass Well-Worn", "M4A1-S | Leaded Glass Battle-Scarred",
  "M4A1-S | Nightmare Factory New", "M4A1-S | Nightmare Minimal Wear",
  "M4A1-S | Nightmare Field-Tested", "M4A1-S | Nightmare Well-Worn",
  "M4A1-S | Nightmare Battle-Scarred", "M4A1-S | Control Panel Factory New",
  "M4A1-S | Control Panel Minimal Wear", "M4A1-S | Control Panel Field-Tested",
  "M4A1-S | Control Panel Well-Worn", "M4A1-S | Control Panel Battle-Scarred",
  "M4A1-S | Moss Quartz Factory New", "M4A1-S | Moss Quartz Minimal Wear",
  "M4A1-S | Moss Quartz Field-Tested", "M4A1-S | Moss Quartz Well-Worn",
  "M4A1-S | Moss Quartz Battle-Scarred", "M4A1-S | Player Two Factory New",
  "M4A1-S | Player Two Minimal Wear", "M4A1-S | Player Two Field-Tested",
  "M4A1-S | Player Two Well-Worn", "M4A1-S | Player Two Battle-Scarred",
  "M4A1-S | Printstream Factory New", "M4A1-S | Printstream Minimal Wear",
  "M4A1-S | Printstream Field-Tested", "M4A1-S | Printstream Well-Worn",
  "M4A1-S | Printstream Battle-Scarred", "M4A1-S | Welcome to the Jungle Factory New",
  "M4A1-S | Welcome to the Jungle Minimal Wear",
  "M4A1-S | Welcome to the Jungle Field-Tested",
  "M4A1-S | Welcome to the Jungle Well-Worn",
  "M4A1-S | Welcome to the Jungle Battle-Scarred",
  "M4A1-S | Blue Phosphor Factory New", "M4A1-S | Blue Phosphor Minimal Wear",
  "M4A1-S | Fizzy POP Factory New", "M4A1-S | Fizzy POP Minimal Wear",
  "M4A1-S | Fizzy POP Field-Tested", "M4A1-S | Fizzy POP Well-Worn",
  "M4A1-S | Fizzy POP Battle-Scarred", "M4A1-S | Imminent Danger Factory New",
  "M4A1-S | Imminent Danger Minimal Wear", "M4A1-S | Imminent Danger Field-Tested",
  "M4A1-S | Imminent Danger Well-Worn", "M4A1-S | Imminent Danger Battle-Scarred",
  "M4A1-S | Night Terror Factory New", "M4A1-S | Night Terror Minimal Wear",
  "M4A1-S | Night Terror Field-Tested", "M4A1-S | Night Terror Well-Worn",
  "M4A1-S | Night Terror Battle-Scarred", "M4A1-S | Black Lotus Factory New",
  "M4A1-S | Black Lotus Minimal Wear", "M4A1-S | Black Lotus Field-Tested",
  "M4A1-S | Black Lotus Well-Worn", "M4A1-S | Black Lotus Battle-Scarred",
  "M4A1-S | Emphorosaur-S Factory New", "M4A1-S | Emphorosaur-S Minimal Wear",
  "M4A1-S | Emphorosaur-S Field-Tested", "M4A1-S | Emphorosaur-S Well-Worn",
  "M4A1-S | Emphorosaur-S Battle-Scarred", "M4A1-S | Mud-Spec Factory New",
  "M4A1-S | Mud-Spec Minimal Wear", "M4A1-S | Mud-Spec Field-Tested",
  "M4A1-S | Mud-Spec Well-Worn", "M4A1-S | Mud-Spec Battle-Scarred",
  "USP-S | Forest Leaves Factory New", "USP-S | Forest Leaves Minimal Wear",
  "USP-S | Forest Leaves Field-Tested", "USP-S | Forest Leaves Well-Worn",
  "USP-S | Forest Leaves Battle-Scarred", "USP-S | Dark Water Minimal Wear",
  "USP-S | Dark Water Field-Tested", "USP-S | Overgrowth Factory New",
  "USP-S | Overgrowth Minimal Wear", "USP-S | Overgrowth Field-Tested",
  "USP-S | Overgrowth Well-Worn", "USP-S | Overgrowth Battle-Scarred",
  "USP-S | Blood Tiger Factory New", "USP-S | Blood Tiger Minimal Wear",
  "USP-S | Blood Tiger Field-Tested", "USP-S | Serum Factory New",
  "USP-S | Serum Minimal Wear", "USP-S | Serum Field-Tested",
  "USP-S | Night Ops Factory New", "USP-S | Night Ops Minimal Wear",
  "USP-S | Night Ops Field-Tested", "USP-S | Night Ops Well-Worn",
  "USP-S | Night Ops Battle-Scarred", "USP-S | Stainless Factory New",
  "USP-S | Stainless Minimal Wear", "USP-S | Stainless Field-Tested",
  "USP-S | Stainless Well-Worn", "USP-S | Stainless Battle-Scarred",
  "USP-S | Guardian Factory New", "USP-S | Guardian Minimal Wear",
  "USP-S | Guardian Field-Tested", "USP-S | Orion Factory New",
  "USP-S | Orion Minimal Wear", "USP-S | Orion Field-Tested",
  "USP-S | Orion Well-Worn", "USP-S | Orion Battle-Scarred",
  "USP-S | Road Rash Factory New", "USP-S | Road Rash Minimal Wear",
  "USP-S | Road Rash Field-Tested", "USP-S | Road Rash Well-Worn",
  "USP-S | Road Rash Battle-Scarred", "USP-S | Royal Blue Factory New",
  "USP-S | Royal Blue Minimal Wear", "USP-S | Royal Blue Field-Tested",
  "USP-S | Royal Blue Well-Worn", "USP-S | Royal Blue Battle-Scarred",
  "USP-S | Caiman Factory New", "USP-S | Caiman Minimal Wear",
  "USP-S | Caiman Field-Tested", "USP-S | Caiman Well-Worn",
  "USP-S | Business Class Factory New", "USP-S | Business Class Minimal Wear",
  "USP-S | Business Class Field-Tested", "USP-S | Business Class Well-Worn",
  "USP-S | Business Class Battle-Scarred", "USP-S | Pathfinder Factory New",
  "USP-S | Pathfinder Minimal Wear", "USP-S | Pathfinder Field-Tested",
  "USP-S | Para Green Factory New", "USP-S | Para Green Minimal Wear",
  "USP-S | Para Green Field-Tested", "USP-S | Para Green Well-Worn",
  "USP-S | Para Green Battle-Scarred", "USP-S | Torque Factory New",
  "USP-S | Torque Minimal Wear", "USP-S | Torque Field-Tested",
  "USP-S | Torque Well-Worn", "USP-S | Torque Battle-Scarred",
  "USP-S | Kill Confirmed Factory New", "USP-S | Kill Confirmed Minimal Wear",
  "USP-S | Kill Confirmed Field-Tested", "USP-S | Kill Confirmed Well-Worn",
  "USP-S | Kill Confirmed Battle-Scarred", "USP-S | Lead Conduit Factory New",
  "USP-S | Lead Conduit Minimal Wear", "USP-S | Lead Conduit Field-Tested",
  "USP-S | Lead Conduit Well-Worn", "USP-S | Lead Conduit Battle-Scarred",
  "USP-S | Cyrex Factory New", "USP-S | Cyrex Minimal Wear",
  "USP-S | Cyrex Field-Tested", "USP-S | Cyrex Well-Worn",
  "USP-S | Cyrex Battle-Scarred", "USP-S | Neo-Noir Factory New",
  "USP-S | Neo-Noir Minimal Wear", "USP-S | Neo-Noir Field-Tested",
  "USP-S | Neo-Noir Well-Worn", "USP-S | Neo-Noir Battle-Scarred",
  "USP-S | Blueprint Factory New", "USP-S | Blueprint Minimal Wear",
  "USP-S | Blueprint Field-Tested", "USP-S | Blueprint Well-Worn",
  "USP-S | Blueprint Battle-Scarred", "USP-S | Cortex Factory New",
  "USP-S | Cortex Minimal Wear", "USP-S | Cortex Field-Tested",
  "USP-S | Cortex Well-Worn", "USP-S | Cortex Battle-Scarred",
  "USP-S | Check Engine Factory New", "USP-S | Check Engine Minimal Wear",
  "USP-S | Check Engine Field-Tested", "USP-S | Check Engine Well-Worn",
  "USP-S | Check Engine Battle-Scarred", "USP-S | Flashback Factory New",
  "USP-S | Flashback Minimal Wear", "USP-S | Flashback Field-Tested",
  "USP-S | Flashback Well-Worn", "USP-S | Flashback Battle-Scarred",
  "USP-S | Purple DDPAT Factory New", "USP-S | Purple DDPAT Minimal Wear",
  "USP-S | Purple DDPAT Field-Tested", "USP-S | Purple DDPAT Well-Worn",
  "USP-S | Purple DDPAT Battle-Scarred", "USP-S | Orange Anolis Factory New",
  "USP-S | Orange Anolis Minimal Wear", "USP-S | Orange Anolis Field-Tested",
  "USP-S | Monster Mashup Factory New", "USP-S | Monster Mashup Minimal Wear",
  "USP-S | Monster Mashup Field-Tested", "USP-S | Monster Mashup Well-Worn",
  "USP-S | Monster Mashup Battle-Scarred", "USP-S | Target Acquired Factory New",
  "USP-S | Target Acquired Minimal Wear", "USP-S | Target Acquired Field-Tested",
  "USP-S | Target Acquired Well-Worn", "USP-S | Target Acquired Battle-Scarred",
  "USP-S | Ancient Visions Factory New", "USP-S | Ancient Visions Minimal Wear",
  "USP-S | Ancient Visions Field-Tested", "USP-S | Ancient Visions Well-Worn",
  "USP-S | The Traitor Factory New", "USP-S | The Traitor Minimal Wear",
  "USP-S | The Traitor Field-Tested", "USP-S | The Traitor Well-Worn",
  "USP-S | The Traitor Battle-Scarred", "USP-S | Whiteout Factory New",
  "USP-S | Whiteout Minimal Wear", "USP-S | Whiteout Field-Tested",
  "USP-S | Whiteout Well-Worn", "USP-S | Whiteout Battle-Scarred",
  "USP-S | Black Lotus Factory New", "USP-S | Black Lotus Minimal Wear",
  "USP-S | Black Lotus Field-Tested", "USP-S | Black Lotus Well-Worn",
  "USP-S | Black Lotus Battle-Scarred", "USP-S | Ticket to Hell Factory New",
  "USP-S | Ticket to Hell Minimal Wear", "USP-S | Ticket to Hell Field-Tested",
  "USP-S | Ticket to Hell Well-Worn", "USP-S | Ticket to Hell Battle-Scarred",
  "USP-S | Printstream Factory New", "USP-S | Printstream Minimal Wear",
  "USP-S | Printstream Field-Tested", "USP-S | Printstream Well-Worn",
  "USP-S | Printstream Battle-Scarred", "USP-S | Jawbreaker Factory New",
  "USP-S | Jawbreaker Minimal Wear", "USP-S | Jawbreaker Field-Tested",
  "USP-S | Jawbreaker Well-Worn", "USP-S | Jawbreaker Battle-Scarred",
  "USP-S | Desert Tactical Factory New", "USP-S | Desert Tactical Minimal Wear",
  "USP-S | Desert Tactical Field-Tested", "USP-S | Desert Tactical Well-Worn",
  "USP-S | Desert Tactical Battle-Scarred",
]

function byteToHexString(uint8arr) {
  if (!uint8arr) {
    return '';
  }

  return uint8arr.reduce((hexStr, byte) => hexStr + byte.toString(16).padStart(2, '0'), '');
}

function hexStringToByte(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Wrong data type passed to converter. Hexadecimal string is expected');
  }

  return new Uint8Array(str.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}

function hex2ascii(hexx) {
  const hex = hexx.toString();
  let str = '';

  for (let i = 0; i < hex.length && hex.substr(i, 2) !== '00'; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }

  return str;
}

async function getFirstOfferFromMarket(host) {
  const apiUrl = `https://${host}/exchange/v1/market/items?gameId=a8db&limit=1&currency=USD`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.objects[0];
  } catch (error) {
    throw error;
  }
}

function buildTargetBodyFromOffer(offer) {
  return {
    "targets": [
      {
        "amount": 1,
        "gameId": offer.gameId,
        "price": { "amount": "2", "currency": "USD" },
        "attributes": {
          "gameId": offer.gameId,
          "categoryPath": offer.extra.categoryPath,
          "title": offer.title,
          "name": offer.title,
          "image": offer.image,
          "ownerGets": { "amount": "1", "currency": "USD" }
        }
      }
    ]
  };
}

function sign(string, secretKey) {
  const signatureBytes = nacl.sign(new TextEncoder('utf-8').encode(string), hexStringToByte(secretKey));
  return byteToHexString(signatureBytes).substr(0, 128);
}




async function sendTarget(title, price) {
  try {
    const method = "POST";
    const apiUrlPath = "/marketplace-api/v1/user-targets/create";
    const targetRequestBody = {
      "GameID": "a8db",
      "Targets": [
        {
          "Amount": "1",
          "Price": {
            "Currency": "USD",
            "Amount": price
          },
          "Title": title,
          "Attrs": {
            "paintSeed": 0,
            "floatPartValue": ""
          }
        }
      ]
    }

    const timestamp = Math.floor(new Date().getTime() / 1000);
    const stringToSign = method + apiUrlPath + JSON.stringify(targetRequestBody) + timestamp.toString();
    const signature = sign(stringToSign, secretKey);
    const requestOptions = {
      method: method,
      url: `https://${host}${apiUrlPath}`,
      headers: {
        "X-Api-Key": publicKey,
        "X-Request-Sign": `dmar ed25519 ${signature}`,
        "X-Sign-Date": timestamp,
        'Content-Type': 'application/json',
      },
      data: targetRequestBody
    };

    const response = await axios(requestOptions);

    console.log(response.data.Result[0].Error)
    return response.data; // Return the entire response for further processing if needed
  } catch (error) {
    console.error(error);
    return null;
  }
}


async function sendNewTargetRequest(data) {
  try {


  } catch {

  }
}
// ...



async function getBalance(publicKey, secretKey, host) {
  try {
    const method = "GET";
    const apiUrlPath = "/account/v1/balance";
    const targetRequestBody = "";
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const stringToSign = method + apiUrlPath + targetRequestBody + timestamp;
    const signature = sign(stringToSign, secretKey);
    const requestOptions = {
      method: method,
      url: `https://${host}${apiUrlPath}`,
      headers: {
        "X-Api-Key": publicKey,
        "X-Request-Sign": `dmar ed25519 ${signature}`,
        "X-Sign-Date": timestamp,
        'Content-Type': 'application/json',
      },
      data: targetRequestBody
    };

    const response = await axios(requestOptions);

    return response.data.usd; // Return the entire response for further processing if needed
  } catch (error) {
    console.error(error);
    return null;
  }
}


async function getBestPrice(title, publicKey, secretKey, host) {
  try {
    const method = "GET";


    const apiUrlPath = `/exchange/v1/market/items?gameId=a8db&title=${title}&limit=1&offset=0&orderBy=price&orderDir=asc&currency=USD&priceFrom=0&priceTo=0`;
    const targetRequestBody = "";
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const stringToSign = method + apiUrlPath + targetRequestBody + timestamp;
    const signature = sign(stringToSign, secretKey);
    const requestOptions = {
      method: method,
      url: `https://${host}${apiUrlPath}`,
      headers: {
        "X-Api-Key": publicKey,
        "X-Request-Sign": `dmar ed25519 ${signature}`,
        "X-Sign-Date": timestamp,
        'Content-Type': 'application/json',
      },
      data: targetRequestBody
    };

    // Capture the result and update the variables using destructuring assignment

    const response = await axios(requestOptions);
    console.log(response.data.objects[0].price.USD)
    return response.data.objects[0].price.USD
  } catch (error) {
    console.error(error);
  }
}

async function getTitle(title, publicKey, secretKey, host) {
  try {
    const method = "GET";

    const apiUrlPath = `/exchange/v1/market/items?gameId=a8db&title=${title}&limit=1&offset=0&currency=USD&priceFrom=0&priceTo=0`;

    const targetRequestBody = "";
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const stringToSign = method + apiUrlPath + targetRequestBody + timestamp;
    const signature = sign(stringToSign, secretKey);
    const requestOptions = {
      method: method,
      url: `https://${host}${apiUrlPath}`,
      headers: {
        "X-Api-Key": publicKey,
        "X-Request-Sign": `dmar ed25519 ${signature}`,
        "X-Sign-Date": timestamp,
        'Content-Type': 'application/json',
      },
      data: targetRequestBody
    };

    // Capture the result and update the variables using destructuring assignment
    const response = await axios(requestOptions);
    console.log(response.data.objects[0].title)
    return response.data.objects[0].title

  } catch (error) {
    console.error(error);
  }
}




async function getTargets(title, publicKey, secretKey, host) {
  try {
    const method = "GET";
    const apiUrlPath = `/marketplace-api/v1/targets-by-title/a8db/${title}`;
    const targetRequestBody = "";
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const stringToSign = method + apiUrlPath + targetRequestBody + timestamp;
    const signature = sign(stringToSign, secretKey);
    const requestOptions = {
      method: method,
      url: `https://${host}${apiUrlPath}`,
      headers: {
        "X-Api-Key": publicKey,
        "X-Request-Sign": `dmar ed25519 ${signature}`,
        "X-Sign-Date": timestamp,
        'Content-Type': 'application/json',
      },
      data: targetRequestBody
    };

    // Capture the result and update the variables using destructuring assignment
    const response = await axios(requestOptions);
    return response.data

  } catch (error) {
    console.error(error);
  }
}


async function getUserTargets(publicKey, secretKey, host) {
  try {
    const list = [];
    const method = "GET";
    const apiUrlPath = `/marketplace-api/v1/user-targets?GameID=a8db&BasicFilters.Status=TargetStatusActive&SortType=UserTargetsSortTypeDefault`;
    const targetRequestBody = "";
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const stringToSign = method + apiUrlPath + targetRequestBody + timestamp;
    const signature = sign(stringToSign, secretKey);
    const requestOptions = {
      method: method,
      url: `https://${host}${apiUrlPath}`,
      headers: {
        "X-Api-Key": publicKey,
        "X-Request-Sign": `dmar ed25519 ${signature}`,
        "X-Sign-Date": timestamp,
        'Content-Type': 'application/json',
      },
      data: targetRequestBody
    };

    // Capture the result and update the variables using destructuring assignment
    const response = await axios(requestOptions);
    for (let i = 0; i < response.data.Items.length; i++) {
      list.push(response.data.Items[i].TargetID)
    }
    console.log(list.length)
    return list

  } catch (error) {
    console.error(error);
    throw error; // rethrow the error to propagate it to the caller
  }
}


async function deleteTarget(target, publicKey, secretKey, host) {
  try {
    const list = [];
    const method = "POST";
    const apiUrlPath = `/marketplace-api/v1/user-targets/delete`;
    const targetRequestBody = {
  "Targets": [
      {
        "TargetID": target
      }
    ]
  }

    const timestamp = Math.floor(new Date().getTime() / 1000);
    const stringToSign = method + apiUrlPath + JSON.stringify(targetRequestBody) + timestamp.toString();
    const signature = sign(stringToSign, secretKey);
    const requestOptions = {
      method: method,
      url: `https://${host}${apiUrlPath}`,
      headers: {
        "X-Api-Key": publicKey,
        "X-Request-Sign": `dmar ed25519 ${signature}`,
        "X-Sign-Date": timestamp,
        'Content-Type': 'application/json',
      },
      data: targetRequestBody
    };

    // Capture the result and update the variables using destructuring assignment
    const response = await axios(requestOptions);
    console.log(response.data)

  } catch (error) {
    console.error(error);
  }
}



const publicKey = process.env.DMARKET_API_KEY;
const secretKey = process.env.DMARKET_SECRET_KEY;
const host = 'api.dmarket.com';





async function main(title) {
  let bestTarget = '';
  try {

    const rTitle = await getTitle(title, publicKey, secretKey, host)
    const lowestTargetPromise = getTargets(rTitle, publicKey, secretKey, host);
    const lowestPricePromise = getBestPrice(rTitle, publicKey, secretKey, host);

    // Wait for both promises to resolve
    const lowestTarget = await lowestTargetPromise;
    const lowestPrice = await lowestPricePromise;

    // Ensure values are valid before performing division
    for (let i = 0; i < Math.min(10, lowestTarget.orders.length); i++) {
      if (lowestPrice && lowestTarget.orders[i].price && lowestPrice !== 0 && lowestPrice - lowestTarget.orders[0].price !== 0) {
        const result = (lowestPrice - lowestTarget.orders[i].price) / lowestPrice * 100;
        
        if (lowestTarget.orders[i].attributes.floatPartValue === "any") {
          bestTarget = lowestTarget.orders[i].price;
          console.log("bestTarget : " + lowestTarget.orders[i].price);
          console.log("result percent : " + result);
          if (result > 12 && (Number(bestTarget) > 500 && Number(bestTarget) < 1714)) {
            sendTarget(rTitle, (bestTarget / 100) + 0.01)
            console.log("yay");
          }
          return bestTarget; // Return the best target price found and exit the function
        } else {
          console.log("Error: Invalid values for division.");
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}





// Define a function to loop through titles every 3 seconds


/*async function loopThroughTitles(titles) {
  // Loop index
  let index = 0;

  // Set up interval to run every 3 seconds
  const interval = setInterval(async () => {
    // Get the current title
    const title = titles[index];

    // Call the main function with the current title
    await main(title);

    // Move to the next title
    index++;

    // If the end of the titles array is reached, reset the index
    if (index === titles.length) {
      index = 0;
    }
  }, 4000); // Interval set to 3 seconds (3000 milliseconds)

  // To stop the loop after a certain time (optional)
  // setTimeout(() => clearInterval(interval), 15000); // Stop after 15 seconds (15000 milliseconds)
}*/


async function test() {
  const title = await getTitle(itemTitle[1], publicKey, secretKey, host);
  const targets = await getTargets(title, publicKey, secretKey, host);
  for (let i = 0; i < Math.min(10, targets.orders.length); i++) {
    if(targets.orders[i].attributes.floatPartValue === "any"){
      console.log(targets.orders[i].price)
    }
  }
}


// Define a list of titles

// Call the function to start looping through titles
//loopThroughTitles(itemTitle)


async function trythis() {
  try {
    const targets = await getUserTargets(publicKey, secretKey, host);
    let index = 0;

    const interval = setInterval(async () => {
      // Check if there are more targets to delete
      if (index < targets.length) {
        const target = targets[index];
        console.log(target);
        await deleteTarget(target, publicKey, secretKey, host);
        index++; // Move to the next target
      } else {
        // Stop the interval if all targets have been deleted
        clearInterval(interval);
      }
    }, 1000); // Run every 1 second
  } catch (error) {
    console.error(error);
  }
}




async function loopThroughTitles(titles) {
  // Set up an infinite loop
  while (true) {
    // Loop index
    let index = 0;

    // Set up interval to run every 3 seconds
    const interval = setInterval(async () => {
      // Get the current title
      const title = titles[index];

      // Call the main function with the current title
      await main(title);

      // Move to the next title
      index++;

      // If the end of the titles array is reached, reset the index
      if (index === titles.length) {
        clearInterval(interval); // Stop the interval
        trythis(); // Call trythis immediately after loopThroughTitles finishes
      }
    }, 4000); // Interval set to 4 seconds (4000 milliseconds)

    // Wait for the interval to finish before starting the loop again
    await new Promise(resolve => setTimeout(resolve, titles.length * 4000));
  }
}



loopThroughTitles(itemTitle)
