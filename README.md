# Athena-Agent
Say Hello to Athena! She is an Artificial Intelligence Agent that was Designed in Mind to Mix Intelligence with Wisdom to Enable Her to Learn By Doing instead of Knowing How To Do...

# Install
The code lives in `athena-system/`. Install it natively into `~/.athena`:

```bash
git clone https://github.com/FenrirLupus/Athena-Agent.git
cd Athena-Agent/athena-system
bash install.sh
```

Or install directly (clone + setup in one):

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/FenrirLupus/Athena-Agent/main/athena-system/install.sh)
```

Either way the code ALWAYS lands in `~/.athena/athena-system` (the dumb-install
rule), the `athena` command is linked, and the venv is built. Then:

```bash
athena        # the CLI window
athena setup  # configure providers
athena web    # the GUI server
```

# Release Information
- Stable: A release that contains minimal bugs and is polished enough to be fully capable and with high durability 
- Beta:   A release that contains some bugs or has little polish to be slightly capable with medium durability
- Alpha:  A release that contains lots of bugs or has no polish to be capable with low to no durability
Stable Release Digit: 1.0.0, Beta Release Digit: 0.1.0, Alpha Release Digit: 0.0.1,
Example of Versioning: 1.1.1 would mean it is the 0.1 Alpha Version within the 1.1 Beta Version of the Stable 1.0 Release

# About
- Athena is a Side Project without the Intentions of Being Professionally Made as I have Zero Experience with Code other than Hello World and If Statements as I am more Artistic in Nature
- She is Vibe Coded Using a Highly Intelligent Yet Highly Efficient Large Language Model that can Perform Any Task Given
- Her Concept is Similar to a Bee Hive Where there is the Queen Bee that Delegates Tasks and such to the Worker Bees that then can Delegate work to the Drones Based Upon the Queen's Demands
- She is Sold As Is Without Warranty or Equivalent Promises as this Repo is Meant for Me to Upload Her Architecture and Update Her Overtime

# Features
- Agents: Athena can have Agents to perform tasks as well as command Subagents for Specific Tasks
- Extensions: Plugins, Tools, and Skills Allow Athena to Have Community Modifications such as Plugins are Bundles that contain Custom Architecture as well as Tools/Skills, Tools Contains Scripts that Function as Hands-Off Operations, Skills Contain Instructions that Function as Hands-On Operations
- Sessions: Each Session is Mapped to a UUID in which Sessions are Stored, Sessions are then Stored into a Vault that acts as the Universal Knowledge Database of the Agent Specified with an Index to Act as a Table of Contents for the Vault this way Athena can Remember BUT only Remember Applicable Information
- Website: Athena has Her Own Simple Website GUI Interface as well as CLI Interface to have Her operate in a User Friendly way such as Having Text Chats, Audio Calls, Session and Vault Management
- Server: Athena Not only has Her own Athena Command for Local Setup and Interactions BUT also a System Service for Hosting Her Architecture as a Server for 24/7 Operation
- Bring Your Own Key: Can Easily Setup Providers Through Athena's Architecture such as Only 1 Set of Credentials are Stored as Each Agent Profile Uses the Same Credentials Saved BUT Can Be Configured for a Specific Mix of Providers and Models
- Doctor/Nurse: The Doctor System acts as an Integrity Check on Athena's Architecture while the Nurse Performs Active Diagnosis and Repairs Based upon the Doctor's Orders OR Operator's Orders
- Custodian/Janitor: The Custodian System acts as a Cleanup or Hygiene System that Aims to Trace the Code and Check for Anything to Cleanup such as Unused Files or Dead Code while the Janitor Performs Active Cleanup and Optimizations to Athena's Architecture
- Snapshots: Athena has a Snapshots System where there are 3 Types of Snapshots such as 1) Github Updates aka Patches where Athena is Able to Update by Overwriting Her System Folder OR Optionally Automatic Patching of the update into the Existing Architecture if Optimized Efficiently through the Janitor, 2) Snapshots are a Saved Backup of the Current Athena System which Acts Like an Immutable Operating System where Athena can Restore Herself when Things Break, 3) Backups are the Versions of Athena that are Kept In case Her Architecture is Broken Beyond Redemption and Thus Backups Allow Restoring Athena to a Previous Version of Herself when Stable
