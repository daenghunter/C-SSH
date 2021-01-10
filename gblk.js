		case 'tendang':
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
			const jembot = quotedMsgObj.sender.id
			await xbot.removeParticipant(from, jembot)
		break
		case 'balik':
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
			const jembot1 = quotedMsgObj.sender.id
			await xbot.addParticipant(from, jembot1)
		break