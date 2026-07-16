class DailyActivityChatbot {
    constructor() {
        this.activities = this.loadActivities();
        this.categories = {
            work: {
                name: 'İş',
                icon: '💼',
                color: '#bee3f8',
                keywords: ['iş', 'toplantı', 'proje', 'ofis', 'çalış', 'müşteri', 'sunum', 'rapor', 'mail', 'e-posta', 'görüşme', 'konferans']
            },
            health: {
                name: 'Sağlık',
                icon: '💪',
                color: '#c6f6d5',
                keywords: ['spor', 'koş', 'yürüyüş', 'yoga', 'fitness', 'gym', 'sağlık', 'doktor', 'egzersiz', 'antrenman', 'bisiklet', 'yüz', 'pilates', 'meditasyon']
            },
            social: {
                name: 'Sosyal',
                icon: '👥',
                color: '#fbb6ce',
                keywords: ['arkadaş', 'aile', 'görüş', 'buluş', 'sohbet', 'kahve', 'yemek', 'parti', 'davet', 'ziyaret', 'telefon', 'konuş', 'sosyal']
            },
            education: {
                name: 'Eğitim',
                icon: '📚',
                color: '#fed7d7',
                keywords: ['oku', 'kitap', 'ders', 'kurs', 'öğren', 'eğitim', 'makale', 'video', 'tutorial', 'çalış', 'sınav', 'ödev', 'araştır', 'podcast']
            },
            hobby: {
                name: 'Hobi',
                icon: '🎨',
                color: '#fefcbf',
                keywords: ['müzik', 'oyun', 'film', 'dizi', 'resim', 'hobi', 'fotoğraf', 'gitar', 'piyano', 'çiz', 'yaz', 'blog', 'dans', 'bahçe']
            },
            home: {
                name: 'Ev İşleri',
                icon: '🏠',
                color: '#e9d8fd',
                keywords: ['temizlik', 'yemek', 'alışveriş', 'market', 'çamaşır', 'bulaşık', 'düzen', 'tamir', 'taşın', 'organize']
            },
            finance: {
                name: 'Finans',
                icon: '💰',
                color: '#c4f1f9',
                keywords: ['para', 'banka', 'fatura', 'ödeme', 'alışveriş', 'harcama', 'bütçe', 'yatırım', 'kredi', 'hesap']
            },
            other: {
                name: 'Diğer',
                icon: '📌',
                color: '#e2e8f0',
                keywords: []
            }
        };

        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        this.chatContainer = document.getElementById('chatContainer');
        this.userInput = document.getElementById('userInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.statsBtn = document.getElementById('statsBtn');
        this.statsModal = document.getElementById('statsModal');
        this.closeModal = document.getElementById('closeModal');
        this.clearDataBtn = document.getElementById('clearDataBtn');
        this.statsContent = document.getElementById('statsContent');
        this.filterBtns = document.querySelectorAll('.filter-btn');
    }

    attachEventListeners() {
        this.sendBtn.addEventListener('click', () => this.handleSend());
        this.userInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSend();
            }
        });

        this.userInput.addEventListener('input', () => {
            this.userInput.style.height = 'auto';
            this.userInput.style.height = this.userInput.scrollHeight + 'px';
        });

        this.statsBtn.addEventListener('click', () => this.openStatsModal());
        this.closeModal.addEventListener('click', () => this.closeStatsModal());
        this.statsModal.addEventListener('click', (e) => {
            if (e.target === this.statsModal) {
                this.closeStatsModal();
            }
        });

        this.clearDataBtn.addEventListener('click', () => this.clearAllData());

        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.updateStats(e.target.dataset.period);
            });
        });
    }

    handleSend() {
        const text = this.userInput.value.trim();
        if (!text) return;

        this.addUserMessage(text);
        this.userInput.value = '';
        this.userInput.style.height = 'auto';

        setTimeout(() => {
            this.processActivity(text);
        }, 500);
    }

    addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'user-message';
        messageDiv.innerHTML = `
            <div class="message-bubble user">
                <p>${this.escapeHtml(text)}</p>
            </div>
        `;
        this.chatContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addBotMessage(content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'bot-message';
        messageDiv.innerHTML = `
            <div class="message-bubble bot">
                ${content}
            </div>
        `;
        this.chatContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    processActivity(text) {
        const detectedCategories = this.categorizeActivity(text);
        const activity = {
            id: Date.now(),
            text: text,
            categories: detectedCategories,
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString('tr-TR')
        };

        this.activities.push(activity);
        this.saveActivities();

        const categoryTags = detectedCategories
            .map(cat => {
                const category = this.categories[cat];
                return `<span class="category-tag category-${cat}">${category.icon} ${category.name}</span>`;
            })
            .join('');

        const responses = [
            'Harika! Kaydettim 👍',
            'Anladım, not aldım! ✅',
            'Süper! Listeye ekledim 📝',
            'Tamamdır! Kaydedildi ✨',
            'Güzel! Kayıt altına aldım 🎯'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        let content = `<p>${randomResponse}</p>`;
        if (detectedCategories.length > 0) {
            content += `<p>Kategori: ${categoryTags}</p>`;
        }
        content += `<p class="timestamp">${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</p>`;

        this.addBotMessage(content);

        if (this.activities.length % 5 === 0 && this.activities.length > 0) {
            setTimeout(() => {
                const motivationalMessages = [
                    'Harika gidiyorsun! 🌟 Günlük takibini sürdürmek çok iyi! 💪',
                    'Sen harikasın! 🎉 Aktivitelerini kaydetmeye devam et! 🚀',
                    'Mükemmel! 👏 Düzenli kayıt tutmak çok önemli! ⭐',
                    'Tebrikler! 🎊 Güzel bir şekilde ilerliyorsun! 💫'
                ];
                const randomMotivation = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
                this.addBotMessage(`<p>${randomMotivation}</p>`);
            }, 1000);
        }
    }

    categorizeActivity(text) {
        const lowerText = text.toLowerCase();
        const turkishToEnglish = {
            'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u'
        };
        const normalizedText = lowerText.replace(/[çğıöşü]/g, char => turkishToEnglish[char] || char);

        const detectedCategories = [];
        
        for (const [key, category] of Object.entries(this.categories)) {
            if (key === 'other') continue;
            
            const found = category.keywords.some(keyword => {
                const normalizedKeyword = keyword.replace(/[çğıöşü]/g, char => turkishToEnglish[char] || char);
                return normalizedText.includes(normalizedKeyword);
            });

            if (found) {
                detectedCategories.push(key);
            }
        }

        if (detectedCategories.length === 0) {
            detectedCategories.push('other');
        }

        return detectedCategories;
    }

    openStatsModal() {
        this.statsModal.classList.add('active');
        this.updateStats('week');
    }

    closeStatsModal() {
        this.statsModal.classList.remove('active');
    }

    updateStats(period) {
        const filteredActivities = this.filterActivitiesByPeriod(period);

        if (filteredActivities.length === 0) {
            this.statsContent.innerHTML = `
                <div class="empty-stats">
                    <p>Bu dönemde kayıtlı aktivite yok 😊</p>
                    <p>Günlük aktivitelerini paylaşmaya başla!</p>
                </div>
            `;
            return;
        }

        const categoryCounts = {};
        filteredActivities.forEach(activity => {
            activity.categories.forEach(cat => {
                categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
            });
        });

        const sortedCategories = Object.entries(categoryCounts)
            .sort((a, b) => b[1] - a[1]);

        let statsHTML = '<div class="stats-grid">';
        
        statsHTML += `
            <div class="stat-card" style="border-left-color: #667eea;">
                <h3>📊 Toplam Aktivite</h3>
                <div class="count">${filteredActivities.length}</div>
            </div>
        `;

        sortedCategories.forEach(([key, count]) => {
            const category = this.categories[key];
            statsHTML += `
                <div class="stat-card" style="border-left-color: ${category.color};">
                    <h3>${category.icon} ${category.name}</h3>
                    <div class="count">${count}</div>
                </div>
            `;
        });

        statsHTML += '</div>';

        statsHTML += '<div class="activity-list">';
        statsHTML += '<h3 style="margin-bottom: 15px; color: var(--text-dark);">Son Aktiviteler</h3>';
        
        const recentActivities = filteredActivities.slice(-10).reverse();
        recentActivities.forEach(activity => {
            const categoryColors = activity.categories.map(cat => this.categories[cat].color);
            const borderColor = categoryColors[0] || '#e2e8f0';
            
            statsHTML += `
                <div class="activity-item" style="border-left-color: ${borderColor};">
                    <div class="activity-text">${this.escapeHtml(activity.text)}</div>
                    <div class="activity-meta">
                        <span>${activity.date}</span>
                        <span>${activity.categories.map(cat => this.categories[cat].icon).join(' ')}</span>
                    </div>
                </div>
            `;
        });

        statsHTML += '</div>';

        this.statsContent.innerHTML = statsHTML;
    }

    filterActivitiesByPeriod(period) {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        return this.activities.filter(activity => {
            const activityDate = new Date(activity.timestamp);
            const activityDay = new Date(activityDate.getFullYear(), activityDate.getMonth(), activityDate.getDate());

            switch (period) {
                case 'week':
                    const weekAgo = new Date(today);
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return activityDay >= weekAgo;
                case 'month':
                    const monthAgo = new Date(today);
                    monthAgo.setMonth(monthAgo.getMonth() - 1);
                    return activityDay >= monthAgo;
                case 'all':
                default:
                    return true;
            }
        });
    }

    clearAllData() {
        if (confirm('Tüm aktivite verilerini silmek istediğinden emin misin? Bu işlem geri alınamaz!')) {
            this.activities = [];
            this.saveActivities();
            this.closeStatsModal();
            
            this.chatContainer.innerHTML = `
                <div class="welcome-message">
                    <div class="bot-message">
                        <div class="message-bubble bot">
                            <p>Tüm veriler silindi! 🗑️</p>
                            <p>Yeni başlangıç için hazırım! 🎉</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    loadActivities() {
        try {
            const stored = localStorage.getItem('dailyActivities');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading activities:', e);
            return [];
        }
    }

    saveActivities() {
        try {
            localStorage.setItem('dailyActivities', JSON.stringify(this.activities));
        } catch (e) {
            console.error('Error saving activities:', e);
        }
    }

    scrollToBottom() {
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DailyActivityChatbot();
});
